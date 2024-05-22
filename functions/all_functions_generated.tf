
resource "google_storage_bucket_object" "accept_webhook_code" {
  name   = "accept_webhook_5ae83e28c2d19cc8736b6c0049aec2489e909a61be3a9e5f083deda2a188d03a.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/accept_webhook_5ae83e28c2d19cc8736b6c0049aec2489e909a61be3a9e5f083deda2a188d03a.zip"
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
        object = "accept_webhook_5ae83e28c2d19cc8736b6c0049aec2489e909a61be3a9e5f083deda2a188d03a.zip"
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
  name   = "get_name_9696aba888e044426e719576c71d706df54acea5d6e08cfa8a553b1a6867f267.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/get_name_9696aba888e044426e719576c71d706df54acea5d6e08cfa8a553b1a6867f267.zip"
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
        object = "get_name_9696aba888e044426e719576c71d706df54acea5d6e08cfa8a553b1a6867f267.zip"
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
  name   = "query_name_366c3cb7e49ba8d39b52af90a7ea427b9792a367ff4dc36f72b9106e3ab08f31.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/query_name_366c3cb7e49ba8d39b52af90a7ea427b9792a367ff4dc36f72b9106e3ab08f31.zip"
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
        object = "query_name_366c3cb7e49ba8d39b52af90a7ea427b9792a367ff4dc36f72b9106e3ab08f31.zip"
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

