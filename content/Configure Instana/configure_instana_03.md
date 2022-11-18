---
title: "Instana Integration"
date: 2022-11-03T10:57:46+01:00
weight: 153
---


# Integrate Instana with AIManager



{{< task title="Integrate Instana with AIManager" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.1?topic=connections-instana" >}}


In this section you will connect AIManager to the existing Instana instance using the following parameters:

```yaml
Endpoint:             Your Instana URL (probably something like https://dev-aiops.<xyz>.eu-gb.containers.appdomain.cloud/)

API Token:            The API Token from the previous step
```


{{< /task >}}



{{< expand "Need Help?" "⬇" >}}



## Create the connection

1. In the `AIManager` "Hamburger" Menu select `Define`/`Data and tool connections`
1. Click `Add connection`
1. Under `Instana`, click on `Add connection`
1. Click `Connect`
1. Name it `Instana`

1. Fill out the fields on the `Add Connection` page:


	```yaml
    Endpoint:             Your Instana URL (probably something like https://dev-aiops.<xyz>.eu-gb.containers.appdomain.cloud/)

    API Token:            The API Token from the previous step

	```

    ![slack1](/cp4waiops-training/pics/instana/instana_06.png)




1. Click `Next`


1. Leave the defaults on the `Topology Data` page:

    ![slack1](/cp4waiops-training/pics/instana/instana_07.png)

1. Click `Next`




1. Fill out the fields on the `Event Data` page:

	```yaml
    Incidents:            Check
    Issues:               Check
    Changes:              Check (or Unchecked if you prefer not having too much Events coming in)

	```


    ![slack1](/cp4waiops-training/pics/instana/instana_08.png)



1. Click `Next`

1. Fill out the fields on the `Metric Data` page:

	```yaml
    Kubernetes Cluster:      Check
    Kubernetes Deplyoment:   Check
    Kubernetes Node:         Check
    Kubernetes Pod:          Check

	```


    ![slack1](/cp4waiops-training/pics/instana/instana_09.png)



1. Click `Next`

1. Fill out the fields on the `Summary` page:

	```yaml
    Only collect Live Data once Connection is established:      Check

	```


    ![slack1](/cp4waiops-training/pics/instana/instana_10.png)



1. Click `Done`

1. Make sure that the Data Collection turns green after a few minutes

    ![slack1](/cp4waiops-training/pics/instana/instana_11.png)

    ![slack1](/cp4waiops-training/pics/instana/instana_12.png)


{{< /expand >}}

###

{{< hint type=caution  title="Important" >}}
**Data Collection takes some time**\
Data Collection takes some time.\
Events and Topology will eventually appear.
{{< /hint >}}


{{< hint type=tip title="You have successfully finished this Chapter" >}}
**You are now done with the chapter on Configuring Instana**
{{< /hint >}}
