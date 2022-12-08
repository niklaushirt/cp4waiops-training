import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p></p>;

const FirstRightText = () => (
  <p>
  
  <p> Welcome to the IBM CloudPak for Watson AIOps (CP4WAIOPS) Installation Training.</p>
  <p>In this Training you will learn how to manually install IBM CloudPak for Watson AIOps and how to configure some basic functionalities.</p>
  <p>The idea is to provide you with an optimised way to learn how to do a basic setup of CP4WAIOPS.</p>

  </p>

);

const SecondLeftText = () => <p>IBM AIOps Training</p>;

const SecondRightText = () => (
<p>
  
  <p></p>
  <p>You will learn about the following topics:</p>

  <li>Installing CP4WAIOPS from scratch</li>
  <li>Integrate CP4WAIOPS with OpenLDAP for user management</li>
  <li>Integrate CP4WAIOPS with ELK for Log Anomalies</li>
  <li>Define and train AI Models for</li>
  <li>Log Anomaly Detectiom</li>
  <li>Metric Anomaly Detection</li>
  <li>Event Grouping</li>
  <li>Similar Incidents</li>
  <li>Change Risk</li>
  <li>Create Policies for Story creation and Runbook assignment</li>
  <li>Integrate CP4WAIOPS with Ansible Tower and create Runbooks in CP4WAIOPS</li>
  <li>Create a RobotShop Application Topology</li>
  <li>Integrate CP4WAIOPS with Instana (optional)</li>
  <li>Integrate CP4WAIOPS with Slack (optional)</li>
  <li>Integrate CP4WAIOPS with Service Now (optional)</li>
  
  </p>
);

const BannerText = () => <h1>IBM AIOps Training</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
