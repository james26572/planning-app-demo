
import SectionComponent from './SectionComponent';

export const LegalInterest = () => (
  <SectionComponent
    title="Legal Interest"
    fields={[{ name: 'legalInterest', label: 'Describe your legal interest in the property', type: 'text', placeholder: 'E.g., Owner, Leaseholder' }]}
    nextPath="/development-details"
  />
);

export const DevelopmentDetails = () => (
  <SectionComponent
    title="Development Details"
    fields={[{ name: 'developmentDetails', label: 'Details of the development', type: 'text', placeholder: 'Provide development details' }]}
    nextPath="/drawings"
  />
);

export const DrawingsSection = () => (
  <SectionComponent
    title="Drawings and Plans"
    fields={[{ name: 'drawings', label: 'Upload Drawings and Plans', type: 'file' }]}
    nextPath="/confirmation"
  />
);

export const ConfirmationSection = () => (
  <SectionComponent
    title="Confirmation"
    fields={[
      { name: 'confirmation', label: 'I acknowledge that all provided information is accurate and complete.', type: 'checkbox' }
    ]}
    nextPath="/submit"
  />
);



export default {
  LegalInterest,
  DevelopmentDetails,
  DrawingsSection,
  ConfirmationSection,
  
};
