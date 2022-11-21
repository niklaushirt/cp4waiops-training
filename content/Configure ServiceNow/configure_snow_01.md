---
title: "Setup ServiceNow"
date: 2022-11-03T10:57:46+01:00
weight: 192
---

# Introduction

The purpose of this guide is to provide a self-contained set of instructions to integrate with ServiceNow, summarizing instructions from [IBM Documentation](https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.1?topic=connections-servicenow-connection) and other sources.

ServiceNow integrations provide historical and live data for change requests, incidents, and problems. ServiceNow integrations also provide inventory data for the ServiceNow observer.


{{< hint type=note title="Note" >}}
You can only have one ServiceNow integration per instance.
{{< /hint >}}

The instructions have been successfully tested against a ROKS cluster on the IBM Cloud.