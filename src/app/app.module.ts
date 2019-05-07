import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LeadershipComponent } from './components/pages/leadership/leadership.component';
import { CareerComponent } from './components/pages/career/career.component';
import { IndustryComponent } from './components/pages/industry/industry.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { PartnerComponent } from './components/pages/partner/partner.component';
import { SocRespComponent } from './components/pages/soc-resp/soc-resp.component';
import { MissionComponent } from './components/pages/mission/mission.component';
import { WhoWeareComponent } from './components/pages/who-weare/who-weare.component';
import { CulturalComponent } from './components/pages/cultural/cultural.component';
import { AuditAssuranceComponent } from './components/pages/audit-assurance/audit-assurance.component';
import { AccountingServiceComponent } from './components/pages/accounting-service/accounting-service.component';
import { BusinessAdvisoryComponent } from './components/pages/business-advisory/business-advisory.component';
import { TaxComplianceComponent } from './components/pages/tax-compliance/tax-compliance.component';
import { ManagementConsultancyComponent } from './components/pages/management-consultancy/management-consultancy.component';
import { SmeComponent } from './components/pages/sme/sme.component';
import { OilGasComponent } from './components/pages/oil-gas/oil-gas.component';
import { FinancialServiceComponent } from './components/pages/financial-service/financial-service.component';
import { AgribusinessComponent } from './components/pages/agribusiness/agribusiness.component';
import { TechnologyComponent } from './components/pages/technology/technology.component';
import { InduSmeComponent } from './components/pages/indu-sme/indu-sme.component';
import { PrivateSectorComponent } from './components/pages/private-sector/private-sector.component';
import { PublicationComponent } from './components/pages/publication/publication.component';
import { NewsletterComponent } from './components/pages/newsletter/newsletter.component';
import { AnimationdemoComponent } from './animationdemo/animationdemo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LeadershipComponent,
    CareerComponent,
    IndustryComponent,
    PortfolioComponent,
    PartnerComponent,
    SocRespComponent,
    MissionComponent,
    WhoWeareComponent,
    CulturalComponent,
    AuditAssuranceComponent,
    AccountingServiceComponent,
    BusinessAdvisoryComponent,
    TaxComplianceComponent,
    ManagementConsultancyComponent,
    SmeComponent,
    OilGasComponent,
    FinancialServiceComponent,
    AgribusinessComponent,
    TechnologyComponent,
    InduSmeComponent,
    PrivateSectorComponent,
    PublicationComponent,
    NewsletterComponent,
    AnimationdemoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
