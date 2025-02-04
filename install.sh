#!/usr/bin/env bash

export $(cat .env)
sudo sed -i "/minikube/d" /etc/hosts
echo "$(pulumi stack output ip) minikube" | sudo tee -a /etc/hosts
ssh-keygen -R minikube
ssh-keyscan -H minikube >> $HOME/.ssh/known_hosts
ansible-playbook -i .ansible/inventory.ini .ansible/minikube.yaml
