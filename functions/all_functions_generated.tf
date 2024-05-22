
resource "google_storage_bucket_object" "accept_webhook_code" {
  name   = "accept_webhook_8fbd7c1fa2e68a7a08e1605c0efac8a6844fc2e48d1ecd3d1d558be68bec20e7.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/accept_webhook_8fbd7c1fa2e68a7a08e1605c0efac8a6844fc2e48d1ecd3d1d558be68bec20e7.zip"
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
        object = "accept_webhook_8fbd7c1fa2e68a7a08e1605c0efac8a6844fc2e48d1ecd3d1d558be68bec20e7.zip"
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
  name   = "get_name_48709466e39d3384f33ea7f5c77b8b3994324fbae9e1e6d2696480b7ea0c8d22.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/get_name_48709466e39d3384f33ea7f5c77b8b3994324fbae9e1e6d2696480b7ea0c8d22.zip"
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
        object = "get_name_48709466e39d3384f33ea7f5c77b8b3994324fbae9e1e6d2696480b7ea0c8d22.zip"
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
  name   = "query_name_778f20abe704642de1a84e9975f78bed4b07c396dc37a158543a74fbc809ed62.zip"
  bucket = var.functions_bucket_name
  source = "functions/build/query_name_778f20abe704642de1a84e9975f78bed4b07c396dc37a158543a74fbc809ed62.zip"
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
        object = "query_name_778f20abe704642de1a84e9975f78bed4b07c396dc37a158543a74fbc809ed62.zip"
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

