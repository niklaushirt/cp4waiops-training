---
title: "Configure ELK"
date: 2022-11-03T10:57:46+01:00
weight: 55
---

# Configure ELK Integration


In this section you will create the integration with ELK.

###


{{< task title="Create the ELK Integration" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=connections-elk" >}}



Create the ELK Integration with the following parameters:


```yaml
ELK service URL: 		from MY_CONFIGURATION.txt
Kibana URL: 			from MY_CONFIGURATION.txt
Authentication type: 		Token
Token: 				from MY_CONFIGURATION.txt

Filter:
{
 "query": {
  "bool": {
   "must": {
    "term" : { "kubernetes.namespace_name" : "robot-shop" }
   }
  }
 }
}


TimeZone:			set to your Timezone	
Kibana port: 			443

Mapping:
{ 
"codec": "elk",
"message_field": "message",
"log_entity_types": "kubernetes.container_image_id, kubernetes.host, kubernetes.pod_name, kubernetes.namespace_name",
"instance_id_field": "kubernetes.container_name",
"rolling_time": 10,
"timestamp_field": "@timestamp"
}
```
{{< /task >}}



{{< expand "Need Help?" "⬇" >}}

1. In the `AIManager` "Hamburger" Menu select `Define`/`Data and tool connections`
1. Click `Add connection`
1. Under `ELK`, click on `Add connection`
1. Click `Connect`
1. Name it `ELK`


1. 🔎 Get the data from your configuration file `MY_CONFIGURATION.txt` - section  `2.2 Configure ELK` 

    ```bash
    ./tools/11_fzth/get_configuration_info.sh > MY_CONFIGURATION.txt
    ```


1. Fill out the fields on the first page:

	![image](/cp4waiops-training/pics/25_elk.png)


	```yaml
	ELK service URL: 		from MY_CONFIGURATION.txt
	Kibana URL: 			from MY_CONFIGURATION.txt
	Authentication type: 		Token
	Token: 				from MY_CONFIGURATION.txt

	Filter:
      {
        "query": {
          "bool": {
               "must": {
                  "term" : { "kubernetes.namespace_name" : "robot-shop" }
               }
              }
          }
      }

	TimeZone:				set to your Timezone	
	Kibana port: 			443
	```

1. Click `Test connection`. You should get `Connection successful!`

	![image](/cp4waiops-training/pics/26_elk.png)

1. Click `Next`


1. Fill out the `Field mapping`:



    ```yaml
	{ 
	"codec": "elk",
	"message_field": "message",
	"log_entity_types": "kubernetes.container_image_id, kubernetes.host, kubernetes.pod_name, kubernetes.namespace_name",
	"instance_id_field": "kubernetes.container_name",
	"rolling_time": 10,
	"timestamp_field": "@timestamp"
	}
    ```

1. Click `Next`


	![image](/cp4waiops-training/pics/27_elk.png)


1. Turn On `Data collection`

1. Select `Live data for continuous AI training and anomaly detection`


1. Click `Done`


1. Make sure that the Data Collection and Connection Status turn green after a few minutes

	![image](/cp4waiops-training/pics/28_elk.png)

{{< /expand >}}

