#!/usr/bin/env bash

export $(cat .env)
sudo sed -i "/minikube/d" /etc/hosts
echo "$(pulumi stack output ip) minikube" | sudo tee -a /etc/hosts
ssh-keygen -R minikube
ssh-keyscan -H minikube >> ~/.ssh/known_hosts
ansible-playbook -i inventory.ini minikube.yaml
