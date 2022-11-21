---
title: "Configure LDAP"
date: 2022-11-03T10:57:46+01:00
weight: 54
---

# Configure LDAP integration

In this section you will connect to the existing LDAP Server and create a user with Administrative rights:


###

{{< task title="Create the LDAP Connection" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=authentication-configuring-ldap-connections" >}}



Connect to the existing LDAP Server using the following parameters:

```yaml
Server type:          Custom

Base DN:              dc=ibm,dc=com
Bind DN:              cn=admin,dc=ibm,dc=com
Bind DN password:     P4ssw0rd! 

LDAP server URL:      ldap://openldap.openldap:389

Group filter:         (&(cn=%v)(objectclass=groupOfUniqueNames))
User filter:          (&(uid=%v)(objectclass=Person))     <-- Thats the only value you should have to change
Group ID map:         *:cn
User ID map:          *:uid
Group member ID map:  groupOfUniqueNames:uniqueMember
```

{{< /task >}}


{{< expand "Need Help?" "⬇" >}}

## Create LDAP provider


1. In the `AIManager` "Hamburger" Menu select `Administration`

1. Select `Access Control`

	![image](/cp4waiops-training/pics/20_config.png)

1. In the top right Click `Identity provider configuration`

1. You might have to re-login with your admin user

1. In the top right Click `New Connection`

1. Select `LDAP` from the dropdown

1. Click `Next`


1. Fill out the first section of fields:


    ```yaml
    Connection name:      LDAP
    Server type:          Custom

    Base DN:              dc=ibm,dc=com
    Bind DN:              cn=admin,dc=ibm,dc=com
    Bind DN password:     P4ssw0rd! 

    LDAP server URL:      ldap://openldap.openldap:389

    ```

	![image](/cp4waiops-training/pics/21_config.png)


1. Click `Test connection`. You should get `Successful connection`

1. Fill out the rest of the fields:


    ```yaml
    Group filter:         (&(cn=%v)(objectclass=groupOfUniqueNames))
    User filter:          (&(uid=%v)(objectclass=Person))     <-- Thats the only value you should have to change
    Group ID map:         *:cn
    User ID map:          *:uid
    Group member ID map:  groupOfUniqueNames:uniqueMember
    ```

	![image](/cp4waiops-training/pics/22_config.png)


1. Click `Create`

1. You should get a LDAP entry in the provider list

	![image](/cp4waiops-training/pics/23_config.png)
{{< /expand >}}


# 
{{< task title="Create a User in AIManager" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=control-adding-users" >}}
Create a user in AIManager with Admin rights.
{{< /task >}}




{{< expand "Need Help?" "⬇" >}}

## Create User

1. In the `AIManager` "Hamburger" Menu select `Administration`

1. Select `Access Control`

	![image](/cp4waiops-training/pics/20_config.png)

1. In the top right Click `Add users`

1. In the search box type `demo`

1. Click on the `demo/demo/demo@ibm.com` line

1. Click `Next` 

1. Click `Assign roles directly`

1. Click `Next` 

1. Check `Administrator` role

1. Click `Next` 

1. Click `Add` 


## Login as Demo

1. In `AIManager`, click on the round image in the top right and select `Log Out`

	![image](/cp4waiops-training/pics/24_config.png)

1. Click `Logout` 

1. Click `Log in` 

1. Enter credentials `demo` and `P4ssw0rd!` (this information is stored in the LDAP server)

1. Welcome back in AIManager as user Demo

{{< /expand >}}