terraform {
  required_version = ">= 1.9.1"

  required_providers {
    helm = {
      source  = "hashicorp/helm"
      version = "=2.14.0"
    }
  }
}

provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
  }
}

resource "helm_release" "hello-world" {
  name      = var.helm_release_name
  chart     = var.helm_chart_path
  namespace = var.namespace
}
