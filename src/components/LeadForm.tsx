import React from 'react';

const LeadForm: React.FC<{ title?: string }> = ({ title = "Request a Free Quote" }) => {
  return (
    <div className="bg-gray-50 p-4 sm:p-8 rounded-[32px] border border-gray-100 shadow-xl">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <iframe
        src="https://link.apisystem.tech/widget/form/po4QW9VSTnZyP6JXJISB"
        style={{ width: '100%', height: '690px', border: 'none', borderRadius: '10px' }}
        id="inline-t010GwPDlOz32AfOwjyx"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Free Quote Request"
        data-height="690"
        data-layout-iframe-id="inline-t010GwPDlOz32AfOwjyx"
        data-form-id="t010GwPDlOz32AfOwjyx"
        title="Free Quote Request"
      ></iframe>
      <div className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-sm text-black mb-2">Walkertown, NC Local Support:</p>
        <p className="text-2xl font-bold">(336) 933-9182</p>
      </div>
    </div>
  );
};

export default LeadForm;

