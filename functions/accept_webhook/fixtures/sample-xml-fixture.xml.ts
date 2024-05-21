const sampleXmlOutput = `<?xml version="1.0" encoding="US-ASCII" standalone="yes"?>
<Applications xmlns="http://www.interactivebrokers.com/schemas/IBCust_import">
    <Application>
        <Customer email="user@email.com" external_id="investaClientIdTnziLvCUqOOxu7D3IPrSvv6tGI22" md_status_nonpro="true" prefix="nvesta" type="INDIVIDUAL">
            <AccountHolder>
                <AccountHolderDetails external_id="investaClientIdTnziLvCUqOOxu7D3IPrSvv6tGI22" same_mail_address="true">
                    <Email email="user@email.com"/>
                    <Name first="sally" last="garner"/>
                    <DOB>1996-10-18</DOB>
                    <CountryOfBirth>GBR</CountryOfBirth>
                    <NumDependents>0</NumDependents>
                    <MaritalStatus>M</MaritalStatus>
                    <Identification NationalCard="ab123456a" IssuingCountry="GBR" citizenship="GBR"/>
                    <Residence city="Uxbridge" country="GBR" postal_code="UB9 5DB" state="GB-ENG" street_1="Wenlack Close"/>
                    <Phones>
                        <Phone number="+447392339324" country="GBR" type="Mobile"/>
                    </Phones>
                    <EmploymentType>EMPLOYED</EmploymentType>
                    <EmploymentDetails>
                        <employer>investa</employer>
                        <occupation>ACTOR</occupation>
                        <employer_business>ARTS_DESIGN</employer_business>
                        <employer_address city="London" country="GBR" postal_code="W1T 4TQ" state="GB-ENG" street_1="Tottenham Court Road"/>
                    </EmploymentDetails>
                    <TaxResidencies>
                        <TaxResidency country="GBR" TIN="ab123456a" TINType="NonUS_NationalId"/>
                    </TaxResidencies>
                    <W8Ben part_2_9a_country="GBR" name="sally garner" cert="true" blank_form="true" tax_form_file="file2 w8ben (5001).pdf" foreign_tax_id="ab123456a" submit_date="2024-02-05"/>
                </AccountHolderDetails>
                <FinancialInformation net_worth="35000" annual_net_income="35000" liquid_net_worth="35000">
                    <InvestmentExperience>
                        <AssetExperience asset_class="STK" knowledge_level="Extensive" trades_per_year="35" years_trading="4"/>
                        <AssetExperience asset_class="OPT" knowledge_level="Extensive" trades_per_year="35" years_trading="4"/>
                    </InvestmentExperience>
                    <SourcesOfWealth>
                        <SourceOfWealth percentage="100" source_type="SOW-IND-Income" is_used_for_funds="true"/>
                    </SourcesOfWealth>
                </FinancialInformation>
                <RegulatoryInformation>
                    <RegulatoryDetail code="ControlPubTraded" status="false"/>
                    <RegulatoryDetail code="EmployeePubTrade" detail="TSLA, AAPL" status="true" external_individual_id="investaClientIdTnziLvCUqOOxu7D3IPrSvv6tGI22"/>
                    <RegulatoryDetail code="AFFILIATION" status="true"/>
                    <AffiliationDetails>
                        <affiliation_relationship>Self</affiliation_relationship>
                        <person_name>Jane</person_name>
                        <company_id>505</company_id>
                    </AffiliationDetails>
                </RegulatoryInformation>
            </AccountHolder>
        </Customer>
        <Accounts>
            <Account base_currency="GBP" external_id="investaClientIdTnziLvCUqOOxu7D3IPrSvv6tGI22" margin="Cash" multicurrency="false" IRA="false" stock_yield_program="false" limited_options="true" drip="false" client_active_trading="true">
                <InvestmentObjectives>
                    <objective>Speculation</objective>
                    <objective>Growth</objective>
                </InvestmentObjectives>
                <TradingPermissions>
                    <TradingPermission country="UNITED STATES" product="STOCKS"/>
                    <TradingPermission country="UNITED KINGDOM" product="STOCKS"/>
                    <TradingPermission country="UNITED STATES" product="OPTIONS"/>
                </TradingPermissions>
            </Account>
        </Accounts>
        <Users>
            <User external_individual_id="investaClientIdTnziLvCUqOOxu7D3IPrSvv6tGI22" external_user_id="investaClientIdTnziLvCUqOOxu7D3IPrSvv6tGI22" prefix="nvesta"/>
        </Users>
        <Documents bucket_prefix="forms/abcs">
            <Document exec_login_ts="1707091200000" exec_ts="1707091200000" form_no="111">
                <SignedBy>sally garner</SignedBy>
                <AttachedFile file_length="1234" file_name="file1 (111).pdf" sha1_checksum="87758871f598e1a3b4679953589ae2f57a0bb43c"/>
            </Document>
            <Document exec_login_ts="1707091200000" exec_ts="1707091200000" form_no="5001">
                <SignedBy>sally garner</SignedBy>
                <AttachedFile file_length="1234" file_name="file2 w8ben (5001).pdf" sha1_checksum="87758871f598e1a3b4679953589ae2f57a0bb43c"/>
            </Document>
        </Documents>
    </Application>
</Applications>`;

export { sampleXmlOutput };
