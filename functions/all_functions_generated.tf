
resource "google_storage_bucket_object" "accept_webhook_code" {
  name   = "accept_webhook_3da17b76befcf40e2535f74cd83b07d1e63bf581313b38615c623b2c6062df74.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/accept_webhook_3da17b76befcf40e2535f74cd83b07d1e63bf581313b38615c623b2c6062df74.zip"
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
        object = "accept_webhook_3da17b76befcf40e2535f74cd83b07d1e63bf581313b38615c623b2c6062df74.zip"
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
  name   = "get_name_65090edb824ef001f708172547548ade948861a7d6e373567e1b44d58de1395b.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/get_name_65090edb824ef001f708172547548ade948861a7d6e373567e1b44d58de1395b.zip"
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
        object = "get_name_65090edb824ef001f708172547548ade948861a7d6e373567e1b44d58de1395b.zip"
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
  name   = "query_name_047152d03dd0ab35d21bc2fa6863c8ec5e55b73412f2cb7bf016e9f0366880b9.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/query_name_047152d03dd0ab35d21bc2fa6863c8ec5e55b73412f2cb7bf016e9f0366880b9.zip"
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
        object = "query_name_047152d03dd0ab35d21bc2fa6863c8ec5e55b73412f2cb7bf016e9f0366880b9.zip"
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

