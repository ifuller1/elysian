const sampleOnboardingDetails = {
    personalDetails: {
        lastName: "garner",
        firstName: "sally",
        phoneNumber: "+447392339324",
        dateOfBirth: "1996-10-18",
        phoneCountryCode: "GB",
    },
    countryOfBirth: {
        countryOfBirth: {
            nationality: "British, UK",
            num_code: "826",
            alpha_3_code: "GBR",
            alpha_2_code: "GB",
            en_short_name: "United Kingdom",
        },
    },
    address: {
        city: "Uxbridge",
        county: "Buckinghamshire",
        buildingNumber: "24",
        postCode: "UB9 5DB",
        street1: "Wenlack Close",
        street2: "",
    },
    citizenship: {
        isDualCitizenship: false,
        citizenship: {
            nationality: "British, UK",
            num_code: "826",
            alpha_3_code: "GBR",
            alpha_2_code: "GB",
            en_short_name: "United Kingdom",
        },
    },
    investmentProducts: {
        investmentProducts: "STOCKS_AND_OPTIONS",
    },
    taxResidency: {
        nationalInsurance: "ab 12345 6a",
        isMultipleTaxResident: false,
        isUsTax: false,
        isUkResident: true,
    },
    proofOfIdentity: {
        documentType: "UK_PASSPORT",
        expiration: "13/01/2032",
        uniqueIdentifier: "123456789",
    },
    maritalStatus: { maritalStatus: "M" },
    dependents: { dependents: "ZERO" },
    employmentStatus: { employmentStatus: "EMPLOYED" },
    employmentIndustry: { employmentIndustry: "ARTS_DESIGN" },
    occupation: { occupation: "ACTOR" },
    companyDetails: {
        address: {
            city: "London",
            county: "Greater London",
            buildingNumber: "85",
            street1: "Tottenham Court Road",
            postCode: "W1T 4TQ",
            street2: "",
        },
        name: "investa",
    },
    netWorth: { netWorth: "FROM_20K_TO_50K" },
    liquidNetWorth: { liquidNetWorth: "FROM_20K_TO_50K" },
    annualNetIncome: { annualNetIncome: "FROM_20K_TO_50K" },
    sourceOfFunds: {
        sourceOfFunds: [{ fund: "SOW-IND-Income", percentage: 100 }],
    },
    investmentObjectives: {
        investmentObjectives: ["Speculation", "Growth"],
    },
    experienceYearsStocks: { experienceYearsStocks: "FOUR_PLUS" },
    experienceKnowledgeStocks: {
        experienceKnowledgeStocks: "Extensive",
    },
    experienceTradesStocks: {
        experienceTradesStocks: "FROM_20_TO_49",
    },
    experienceYearsOptions: { experienceYearsOptions: "FOUR_PLUS" },
    experienceKnowledgeOptions: {
        experienceKnowledgeOptions: "Extensive",
    },
    experienceTradesOptions: {
        experienceTradesOptions: "FROM_20_TO_49",
    },
    affiliation: {
        isAffiliated: true,
        affiliateRelationship: "Self",
        affiliateName: "Jane",
    },
    affiliateCompany: {
        affiliateCompany: "YANNIX_MANAGEMENT_LP",
    },
    publicTrade: {
        isControlPubTrade: false,
        isPubTradeEmployee: true,
        stockSymbolsEmployee: "TSLA, AAPL",
    },
    termsAndConditions: {
        forms: ["file1 (111).pdf", "file2 w8ben (5001).pdf"],
        formsMetadata: {
            bucket: "ib-forms-bucket",
            formsPath: "forms/abcs",
            timestamp: "123456",
        },
    },
    nextOnboardingStep: "COMPLETE",
    onboardingStep: "TERMS_AND_CONDITIONS",
};

export { sampleOnboardingDetails };
