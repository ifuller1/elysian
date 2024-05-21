resource "google_cloud_run_service_iam_member" "accept_webhook_public_access" {
  depends_on = [google_cloudfunctions2_function.accept_webhook]

  location = google_cloudfunctions2_function.accept_webhook.location
  service  = google_cloudfunctions2_function.accept_webhook.service_config[0].service
  role     = "roles/run.invoker"
  member   = "allUsers"
}

