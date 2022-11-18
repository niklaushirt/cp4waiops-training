---
title: "Create Application"
date: 2022-11-03T10:57:46+01:00
weight: 152
---


# Create RobotShop Application in Instana



{{< task title="Create RobotShop Application" link="https://www.ibm.com/docs/en/instana-observability/current?topic=capabilities-application-perspectives" >}}


In this section you will create an Application Perspective for RobotShop instance using the following parameters:

```yaml
Kind:             Kubernetes or Container

Filter:           Kubernetes.Namespace = robot-shop

```




{{< /task >}}



{{< expand "Need Help?" "⬇" >}}



## Create the connection

1. On `Instana` homepage click `New Applciation Perspective`

    ![slack1](/cp4waiops-training/pics/instana/instana_app_01.png)



1. Select `Kubernetes or Container`

    ![slack1](/cp4waiops-training/pics/instana/instana_app_02.png)

1. Click `Next`


1. Click on `+ Add Filter`

1. Type `namespace` in the search field


1. Select `robot-shop` 

    ![slack1](/cp4waiops-training/pics/instana/instana_app_03.png)

1. Click `Next`


1. Name your Application Perspective `RobotShop`

    ![slack1](/cp4waiops-training/pics/instana/instana_app_04.png)

1. Click `Create`


1. After a short while you should see the application information

    ![slack1](/cp4waiops-training/pics/instana/instana_app_05.png)



{{< /expand >}}

###

{{< hint type=caution  title="Important" >}}
**Data Collection takes some time**\
Data Collection takes some time.
{{< /hint >}}


