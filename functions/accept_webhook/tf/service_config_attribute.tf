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
