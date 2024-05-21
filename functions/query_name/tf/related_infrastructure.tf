resource "google_cloud_run_service_iam_member" "query_name_public_access" {
  depends_on = [google_cloudfunctions2_function.query_name]

  location = google_cloudfunctions2_function.query_name.location
  service  = google_cloudfunctions2_function.query_name.service_config[0].service
  role     = "roles/run.invoker"
  member   = "allUsers"
}

