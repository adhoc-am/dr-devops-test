variable "helm_chart_path" {
  description = "Path to the local stored helm charts"
  type        = string
  default     = "../../Helm/hello-world"
}

variable "helm_release_name" {
  description = "Release name"
  type        = string
  default     = "hello-world"
}

variable "namespace" {
  description = "Kubernetes namespace"
  type        = string
  default     = "default"
}
