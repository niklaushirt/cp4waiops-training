---
title: "Configure ELK"
date: 2022-11-03T10:57:46+01:00
weight: 55
---

# Configure ELK


1. In the `AI Manager` "Hamburger" Menu select `Define`/`Data and tool connections`
1. Click `Add connection`
1. Under `ELK`, click on `Add connection`
1. Click `Connect`
1. Name it `ELK`


1. 🔎 Get the data from your configuration info - section `2.2 Configure ELK` 

    ```bash
    ./tools/11_fzth/get_configuration_info.sh
    ```


1. Fill out the fields on the first page:

	![K8s CNI](/cp4waiops-training/pics/25_elk.png)


	```yaml
	ELK service URL: 		from script
	Kibana URL: 			from script
	Authentication type: 		Token
	Token: 				from script

	Mapping:
		{ 
		"codec": "elk",
		"message_field": "message",
		"log_entity_types": "kubernete	s.container_image_id, kubernetes.host, kubernetes.pod_name, kubernetes.namespace_name",
		"instance_id_field": "kubernetes.container_name",
		"rolling_time": 10,
		"timestamp_field": "@timestamp"
		}
	TimeZone:				set to your Timezone	
	Kibana port: 			443
	```

1. Click `Test connection`. You should get `Connection successful!`

	![K8s CNI](/cp4waiops-training/pics/26_elk.png)

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


	![K8s CNI](/cp4waiops-training/pics/27_elk.png)


1. Turn On `Data collection`

1. Select `Live data for continuous AI training and anomaly detection`


1. Click `Done`


1. Make sure that the Data Collection and Connection Status turn green after a few minutes

	![K8s CNI](/cp4waiops-training/pics/28_elk.png)
