import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LeadershipComponent } from './components/pages/leadership/leadership.component';
import { CareerComponent } from './components/pages/career/career.component';
import { IndustryComponent } from './components/pages/industry/industry.component';
import { SocRespComponent } from './components/pages/soc-resp/soc-resp.component';
import { PartnerComponent } from './components/pages/partner/partner.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { MissionComponent } from './components/pages/mission/mission.component';
import { WhoWeareComponent } from './components/pages/who-weare/who-weare.component';
import { CulturalComponent } from './components/pages/cultural/cultural.component';
import { AccountingServiceComponent } from './components/pages/accounting-service/accounting-service.component';
import { AuditAssuranceComponent } from './components/pages/audit-assurance/audit-assurance.component';
import { BusinessAdvisoryComponent } from './components/pages/business-advisory/business-advisory.component';
import { ManagementConsultancyComponent } from './components/pages/management-consultancy/management-consultancy.component';
import { SmeComponent } from './components/pages/sme/sme.component';
import { TaxComplianceComponent } from './components/pages/tax-compliance/tax-compliance.component';
import { AgribusinessComponent } from './components/pages/agribusiness/agribusiness.component';
import { FinancialServiceComponent } from './components/pages/financial-service/financial-service.component';
import { InduSmeComponent } from './components/pages/indu-sme/indu-sme.component';
import { OilGasComponent } from './components/pages/oil-gas/oil-gas.component';
import { PrivateSectorComponent } from './components/pages/private-sector/private-sector.component';
import { TechnologyComponent } from './components/pages/technology/technology.component';
import { PublicationComponent } from './components/pages/publication/publication.component';
import { NewsletterComponent } from './components/pages/newsletter/newsletter.component';

const routes: Routes = [
  {   path: '', 
      component: HomeComponent 
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
      path: 'leadership',
      component: LeadershipComponent
  },
  {
      path: 'career',
      component: CareerComponent
  },
  {
      path: 'industry',
      component: IndustryComponent
  },
  {
      path: 'sector',
      component: SocRespComponent
  },
  {
      path: 'partner',
      component: PartnerComponent
  },
  {
      path: 'portfolio',
      component: PortfolioComponent
  },
  {
      path: 'mission',
      component: MissionComponent
  }, 
  {
    path: 'whoweare',
    component: WhoWeareComponent
  }, 
  {
    path: 'cultural',
    component: CulturalComponent
  }, 
  {
    path: 'accounting-service',
    component: AccountingServiceComponent
  },  
  {
    path: 'audit-assurance',
    component: AuditAssuranceComponent
  }, 
  {
    path: 'business-advisory',
    component: BusinessAdvisoryComponent
  },  
  {
    path: 'management-consultancy',
    component: ManagementConsultancyComponent
  }, 
  {
    path: 'sme-support',
    component: SmeComponent
  }, 
  {
    path: 'tax-compliance',
    component: TaxComplianceComponent
  },  
  {
    path: 'agri-business',
    component: AgribusinessComponent
  }, 
  {
    path: 'financial-service',
    component: FinancialServiceComponent
  }, 
  {
    path: 'industry-sme',
    component: InduSmeComponent
  }, 
  {
    path: 'oil-gas',
    component: OilGasComponent
  }, 
  {
    path: 'public-sector',
    component: PrivateSectorComponent
  }, 
  {
    path: 'technology',
    component: TechnologyComponent
  }, 
  {
    path: 'publication',
    component: PublicationComponent
  },
  {
    path: 'newsletter',
    component: NewsletterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
