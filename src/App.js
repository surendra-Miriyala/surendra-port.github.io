import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from './components/Chips';
import ControlledExpansionPanels from './components/ControlledExpansionPanels'
import TitlebarGridList from './components/TitlebarGridList'
import Grid from '@material-ui/core/Grid';
import Me from './components/Me.jpg';
import SAP from './components/SAP.svg';
import Iaa from './components/Iaa.png';
import Visa from './components/Visa.svg';
import Walmart from './components/Walmart.svg';
import Tcs from './components/Tcs.png';
import SJSU from './components/SJSU.png';
import SRM from './components/SRM.jpeg';
import SimplePopover from './components/SimplePopover';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import {Surendra} from './Surendra.pdf';


function App() {
  return (
    <body>
      <div className="App">

        <Container maxWidth='md' style={{ backgroundColor: '#0C2E45', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
         
            <Grid item xs={12} sm={12}>
              <h2 style={{ color: '#FFFFFF' }}>Hi. I'm Surendra</h2>
              <p className="intro">If you're wondering if I'm the character from the HBO's comedy series 'Silicon Valley', I'm not. I'm a real person with the name Surendra . I'm a Senior Software Engineer, Frontend Engineer.
              I build web and mobile applications for a tech company.</p>
            </Grid>
          {/* </Grid> */}
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#113A4D', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>SKILLS</h2>
          <Typography component="div" style={{ fontSize: '10rem', fontWeight: '100', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
            <Chip skill='HTML5' />
            <Chip skill='CSS3' />
            <Chip skill='LESS' />
            <Chip skill='Sass' />
            <Chip skill='Javascript' />
            <Chip skill='ECMAScript 6' />
            <Chip skill='React.js' />
            <Chip skill='Redux' />
            <Chip skill='BootStrap' />
            <Chip skill='Material-UI' />
            <Chip skill='Angular.js' />
             <Chip skill='Enzyme' />
            <Chip skill='Jest' />
            <Chip skill='JIRA' />
            <Chip skill='Webpack' />
            <Chip skill='D3.js' />
            <Chip skill='Highcharts' />
            <Chip skill='TypeScript' />
            <Chip skill='Node.js' />
            <Chip skill='Git' />
            <Chip skill='Agile software development' />
            <Chip skill='Responsive Web Design' />
          </Typography>
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#0F4657', padding: '2%', borderRadius: '5px', marginTop: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>PROJECTS</h2>
          <Typography component="div" style={{ justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
            <ControlledExpansionPanels COheading='Aims Modernisation' VTPheading='Agency Pay' IAAheading="Arity" SHheading='Yodlee Money Center' CCSheading='Automated Audio Generator'

              COskills='HTML 5, CSS3, Sass, Less, JavaScript, Bootstrap, Ajax, React JS, Redux, SQL JSON, Git , Restful API, JIRA' 
              VTPskills='HTML5, CSS3, Bootstrap, Java Script, React JS, Redux, jest, enzyme, mokito, Git, Jenkins, java, spring boot' 
              IAAskills='HTML5, CSS3, Bootstrap, Java Script, React JS, Redux, jest, enzyme, mokito, Git, Jenkins, java, spring boot'
              SHskills='HTML5, CSS3, JavaScript, Angular,  Jira,Git, JIRA' 
              CCSskills='HTML5, CSS3, JavaScript (ES5), jQuery'

              COcontent='AIMS Modernization is the Upgrade of the legacy application in which the dealer and distributor are involved in the providing the consumer loans. Which is used to give the clear picture of what transaction has been done, generation of invoice and tracking all details related to invoices.'

              VTPcontent="Agency Pay application is place where the seller can the know state and status of the buyer insurance.
              Where the seller can know how many policies he have , how many buyers are involved in each policy and what is the status of the each buyer insurance with respect to the claims involved, premium payment , new insurance processing status and what kind of policy he have and so on which respect to the business line.
              "

              IAAcontent='Arity platform is fuelled by millions of live telemetric connections and billions of miles of driving data. Powers mobility solutions that can help you make smarter business decisions and directly impact your bottom line.'

              SHcontent='This project is an online service that allows users to consolidate their personal financial information in a single place and perform budgeting activities. By linking your investment, retirement, checking, savings, credit card, mortgage, reward program accounts, and more. This automatically pulls all your financial data into one place so you can get the big picture.'

              CCScontent=' Automated Audio Generator is an automated voice system. This system generates voice or responded according to the user Response/queries. It is acts as an internal cost cutting software (reducing the manual response) by giving automatic response to the user queries.'
            />
          </Typography>
        </Container>

       

        <Container maxWidth='md' style={{ backgroundColor: '#235861', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>I GRADUATED FROM</h2>
          <Paper >
            <div style={{ flexGrow: '1' }}>
              <Grid container spacing={3}>
               <Grid item xs={12} sm={6}>
                  <p style={{ color: '#081B2E', fontWeight: '300' }}>Undergrad from JNTU ANATAPUR</p>
                </Grid>
              </Grid>
            </div>
            <div style={{ flexGrow: '1' }}>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={6} sm={2}>
                </Grid>
                <Grid item xs={6} sm={2}>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#286570', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <div style={{ flexGrow: '1' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <h2 style={{ color: '#FFFFFF' }}>Social Media</h2>
                <ul style= {{listStyle: "none"}}>
                  <li><a style={{ textDecoration: 'none', color: "#FFFFFF", fontWeight: '300'  }} href="https://www.linkedin.com/in/surendra-kumar-reddy-470b04120/" target="_blank"><i class="fa fa-linkedin"></i> LinkedIn</a></li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <h2 style={{ color: '#FFFFFF' }}>To know me better</h2>
                <Button className="btn"  variant="outlined" >
                  <GetAppIcon style={{color:'#FFFFFF', fontSize: 20, marginRight: '8px' }} /> <a style={{ color: "#FFFFFF", fontWeight: '300'  }} href={{Surendra}} class="btn button1">Download resume </a>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <h2 style={{ color: '#FFFFFF' }}>Say Hi</h2>
                <SimplePopover email="If you'd like to know more about me" />
              </Grid>

            </Grid>
          </div>
        </Container>


      </div>
    </body >
  );
}
export default App;