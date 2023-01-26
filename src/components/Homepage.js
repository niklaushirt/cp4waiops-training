import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p></p>;

const FirstRightText = () => (
  <p>
  <p> Welcome to the IBM IT Automation Training.</p>

  <p>In this Training you will learn how to manually install IBM CloudPak for Watson AIOps, Instana and Turbonomic and how to configure some basic functionalities.</p>
  <p></p>
  <p>The idea is to provide you with an optimised way to learn how to do a basic setup of CP4WAIOPS.</p>

  </p>

);

const SecondLeftText = () => <p>IBM AIOps Training</p>;

const SecondRightText = () => (
<p>
  
  <p></p>
  <p>You will learn about the following topics:</p>

  <li>Installing CP4WAIOPS from scratch</li>
  <li>Configuring CP4WAIOPS</li>
  <li>Configuring Instana</li>
  <li>Installing Turbonomic from scratch</li>
  <li>Configuring Turbonomic</li>
  
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
