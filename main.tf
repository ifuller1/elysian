variable "region" {
  default = "europe-west1"
}

variable "project_id" {
  default = "elysian-client-services"
}

variable "firestore_region" {
  default = "europe-west3"
}

variable "project_number" {
  default = "180268730165"
}

provider "google" {
  // note backend would usually be backed by S3 bucket for state
  credentials = file("gh-service-account.json")
  project     = var.project_id
  region      = var.region
}

resource "google_project_service" "firestore" {
  service            = "firestore.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "cloudresourcemanager" {
  service            = "cloudresourcemanager.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "iamcredentials" {
  service            = "iamcredentials.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "iam" {
  service            = "iam.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "compute" {
  service            = "compute.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "run" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "eventarc" {
  service            = "eventarc.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "cloudbuild" {
  service            = "cloudbuild.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "storage" {
  service            = "storage.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "cloudfunctions" {
  service            = "cloudfunctions.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "secretmanager" {
  service            = "secretmanager.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "serviceusage" {
  service            = "serviceusage.googleapis.com"
  disable_on_destroy = false
}

resource "google_firestore_database" "default" {
  depends_on  = [google_project_service.firestore, google_project_service.cloudresourcemanager]
  project     = var.project_id
  name        = "(default)"
  location_id = var.firestore_region

  type = "FIRESTORE_NATIVE"
}

resource "google_project_iam_member" "secret_accessor" {
  depends_on = [google_project_service.iamcredentials]
  project    = var.project_id
  role       = "roles/secretmanager.secretAccessor"
  member     = "serviceAccount:${var.project_number}-compute@developer.gserviceaccount.com"
}

resource "google_project_iam_member" "compute_service_account_token_creator" {
  depends_on = [google_project_service.iamcredentials]
  project    = var.project_id
  role       = "roles/iam.serviceAccountTokenCreator"
  member     = "serviceAccount:${var.project_number}-compute@developer.gserviceaccount.com"
}

resource "google_storage_bucket" "functions_bucket" {
  depends_on = [google_project_service.storage]
  name       = "${var.project_id}-functions-bucket"
  location   = var.region
}

module "functions" {
  depends_on = [
    google_firestore_database.default,
    google_project_service.cloudfunctions,
    google_project_service.run,
    google_project_service.compute,
    google_project_service.eventarc,
    google_project_service.cloudbuild,
    google_project_service.secretmanager,
    google_project_service.serviceusage,
    google_storage_bucket.functions_bucket,
    google_project_iam_member.secret_accessor,
  ]

  source                = "./functions/"
  functions_bucket_name = google_storage_bucket.functions_bucket.name
  project_id            = var.project_id
  project_number        = var.project_number
  region                = var.region
  firestore_region      = var.firestore_region
}
