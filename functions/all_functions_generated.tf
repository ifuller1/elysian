
resource "google_storage_bucket_object" "accept_webhook_code" {
  name   = "accept_webhook_477a07d5331b2eb5163207a97fb7245f28eddc0cfc6d4b7ce708464dff62e3e2.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/accept_webhook_477a07d5331b2eb5163207a97fb7245f28eddc0cfc6d4b7ce708464dff62e3e2.zip"
}

resource "google_cloudfunctions2_function" "accept_webhook" {
  depends_on = [google_storage_bucket_object.accept_webhook_code]
  
  name        = "accept_webhook"
  location    = var.region


  build_config {
    runtime = "nodejs18"
    entry_point = "handler"  # Set the entry point 

    source {
      storage_source {
        bucket = var.functions_bucket_name
        object = "accept_webhook_477a07d5331b2eb5163207a97fb7245f28eddc0cfc6d4b7ce708464dff62e3e2.zip"
      }
    }
  }

  service_config {
  max_instance_count               = 10
  min_instance_count               = 0
  available_memory                 = "256M"
  timeout_seconds                  = 540
  available_cpu                    = "0.583"
  max_instance_request_concurrency = 1
  environment_variables = {
    GCP_PROJECT = var.project_id
  }
}


  
  
}
resource "google_cloud_run_service_iam_member" "accept_webhook_public_access" {
  depends_on = [google_cloudfunctions2_function.accept_webhook]

  location = google_cloudfunctions2_function.accept_webhook.location
  service  = google_cloudfunctions2_function.accept_webhook.service_config[0].service
  role     = "roles/run.invoker"
  member   = "allUsers"
}


resource "google_storage_bucket_object" "get_name_code" {
  name   = "get_name_2198eb6ea0213b2394353699019592dc36ad46fe3a224bc71f4118bb50ecd8b9.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/get_name_2198eb6ea0213b2394353699019592dc36ad46fe3a224bc71f4118bb50ecd8b9.zip"
}

resource "google_cloudfunctions2_function" "get_name" {
  depends_on = [google_storage_bucket_object.get_name_code]
  
  name        = "get_name"
  location    = var.region


  build_config {
    runtime = "nodejs18"
    entry_point = "handler"  # Set the entry point 

    source {
      storage_source {
        bucket = var.functions_bucket_name
        object = "get_name_2198eb6ea0213b2394353699019592dc36ad46fe3a224bc71f4118bb50ecd8b9.zip"
      }
    }
  }

  service_config {
  max_instance_count               = 10
  min_instance_count               = 0
  available_memory                 = "256M"
  timeout_seconds                  = 540
  available_cpu                    = "0.583"
  max_instance_request_concurrency = 1
  environment_variables = {
    GCP_PROJECT = var.project_id
  }
}


  
  
}
resource "google_cloud_run_service_iam_member" "get_name_public_access" {
  depends_on = [google_cloudfunctions2_function.get_name]

  location = google_cloudfunctions2_function.get_name.location
  service  = google_cloudfunctions2_function.get_name.service_config[0].service
  role     = "roles/run.invoker"
  member   = "allUsers"
}


resource "google_storage_bucket_object" "query_name_code" {
  name   = "query_name_3407cb626e64b9fc3f04772edda4257f1ee55a3836574a2c938e184df6332b51.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/query_name_3407cb626e64b9fc3f04772edda4257f1ee55a3836574a2c938e184df6332b51.zip"
}

resource "google_cloudfunctions2_function" "query_name" {
  depends_on = [google_storage_bucket_object.query_name_code]
  
  name        = "query_name"
  location    = var.region


  build_config {
    runtime = "nodejs18"
    entry_point = "handler"  # Set the entry point 

    source {
      storage_source {
        bucket = var.functions_bucket_name
        object = "query_name_3407cb626e64b9fc3f04772edda4257f1ee55a3836574a2c938e184df6332b51.zip"
      }
    }
  }

  service_config {
  max_instance_count               = 10
  min_instance_count               = 0
  available_memory                 = "256M"
  timeout_seconds                  = 540
  available_cpu                    = "0.583"
  max_instance_request_concurrency = 1
  environment_variables = {
    GCP_PROJECT = var.project_id
  }
}


  
  
}
resource "google_cloud_run_service_iam_member" "query_name_public_access" {
  depends_on = [google_cloudfunctions2_function.query_name]

  location = google_cloudfunctions2_function.query_name.location
  service  = google_cloudfunctions2_function.query_name.service_config[0].service
  role     = "roles/run.invoker"
  member   = "allUsers"
}

