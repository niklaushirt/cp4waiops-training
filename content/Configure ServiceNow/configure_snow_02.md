---
title: "Prerequisites"
date: 2022-11-03T10:57:46+01:00
weight: 193
---



# Prerequisites



{{< step title="Procure a ServiceNow Developer Instance" >}}

Join the [ServiceNow Developer Program](https://developer.servicenow.com/dev.do), login with your credentials and request a Personal Developer Instance (PDI) with **version "Paris" and patch 4 or higher**. If you get a different version, you can release/return the instance you just got from the top right menu and request a new one. Then it will ask you to choose the version as shown below:

  ![image-version-select](/cp4waiops-training/pics/snow/image-version-select.png)

You can read about PDI [here](https://developer.servicenow.com/dev.do#!/guides/quebec/developer-program/pdi-guide/personal-developer-instance-guide-introduction). 

Note that your instance will go to sleep after a few hours if not used and if you are inactive for ten or more days the developer instance will be deleted!. You will have two sets of credentials: one for your ServiceNow developer account and another set for the developer instance itself. The ServiceNow developer instance comes loaded with some test data such as open incidents, change requests, etc. 

{{< /step >}}
{{< step title="Install the WAIOPS App in your ServiceNow Developer Instance" >}}

Customers will typically install the WAIOPS app (or plug-in) from the official [ServiceNow App Store](https://store.servicenow.com/sn_appstore_store.do#!/store/application/632a6d81db102010253148703996197e/1.1.0). 

In our case, because we have a developer instance, we will have to install it from a GitHub repo. 

{{< /step >}}
{{< step title="Import app into ServiceNow instance" >}}

#### Prepare GitHub access 

Pre-req: Personal access token for Github. 

If you don't have one, follow the instructions [https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) to create one (no elevated permissions needed for the token).

1. Obtain a developer instance for ServiceNow following the instructions from [https://developer.servicenow.com/dev.do#!/guides/paris/now-platform/pdi-guide/obtaining-a-pdi](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) (this requires a ServiceNow account which can be created as part of the steps - just sign up for a new account). Note: development instances go into hibernation when not used and are decommissined if not used for 10 days.
1. Log on to the development instance.
1. Search for `Credentials`.

    ![Credentials](/cp4waiops-training/pics/snow/credentials1.png)

1. Select `Credentials` under `Connections & Credentials`.

    ![Credentials](/cp4waiops-training/pics/snow/credentials2.png)

1. Select `Basic Authentication`.

    ![Credentials](/cp4waiops-training/pics/snow/credentials3.png)

1. Enter any name, provide your login email address for Github and as password provide your personal access token. Then click `Submit`.

   ![Credentials](/cp4waiops-training/pics/snow/credentials4.png)

1. In the Search field, type in `Studio`. Select `Studio` under `System Applications`. This will open the Application Studio in a new tab.

    ![Studio](/cp4waiops-training/pics/snow/studio1.png)

1. In the `Select Application` dialog, click `Import from Source Control`.

    ![Studio](/cp4waiops-training/pics/snow/studio2.png)

#### Fork GitHub repository 

1. Fork the following repository `https://github.ibm.com/watson-ai4it/servicenow-integration.git`
1. Enter `https://github.ibm.com/<your-repo>/servicenow-integration-fork` as repository, `main` as the branch and in the `Credential` drop-down, select the entry with the credentials that were created in the previous steps.

   ![Studio](/cp4waiops-training/pics/snow/studio3.png)

1. Click `Import` to import the source code.


{{< /step >}}