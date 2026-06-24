import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Helper component for Goal Icons
const GoalIcon = ({ type }) => {
  switch (type) {
    case 'Home Purchase':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case 'Car Purchase':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2a1 1 0 001-1v-3a1 1 0 00-1-1h-2.153a1 1 0 01-.986-.836l-1.154-6.501A1 1 0 0013.722 4H10.28a1 1 0 00-.986.836L8.14 11.164a1 1 0 01-.986.836H5a1 1 0 00-1 1v3a1 1 0 001 1h2m12 0a2 2 0 11-4 0m4 0c0-1.105-.895-2-2-2s-2 .895-2 2m-4 0a2 2 0 11-4 0m4 0c0-1.105-.895-2-2-2s-2 .895-2 2" />
        </svg>
      );
    case 'Home Renovation':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case 'Holiday Home':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'Foreign Tour':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2h-1.5a2 2 0 01-2-2V2.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'Family Gifting':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0H4v13a2 2 0 002 2h12a2 2 0 002-2V8h-8z" />
        </svg>
      );
    case 'Charity':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'Child Birth Expenses':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'Big Purchases':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case 'Estate For Children':
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
};

export default function Assessment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showReport, setShowReport] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactMobile, setContactMobile] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const [modalPlanningType, setModalPlanningType] = useState('college'); // 'college' | 'budget'
  const [modalSelectedColleges, setModalSelectedColleges] = useState([]);
  const [modalIncludeForeign, setModalIncludeForeign] = useState(false);
  const [modalTargetYear, setModalTargetYear] = useState('');
  const [modalBudgetAmount, setModalBudgetAmount] = useState('');

  // Trip planning modal states
  const [isTripModalOpen, setIsTripModalOpen] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState(null);
  const [tripPlanningType, setTripPlanningType] = useState('destinations'); // 'destinations' | 'budget'
  const [tripSelectedDestinations, setTripSelectedDestinations] = useState([]);
  const [tripTargetYear, setTripTargetYear] = useState('');
  const [tripBudgetPerPerson, setTripBudgetPerPerson] = useState('');
  const [tripSearchQuery, setTripSearchQuery] = useState('');

  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    spouseMobile: '',
    spouseEmail: '',
    address: '',
    consent: false,
    name: '',
    occupation: '',
    designation: '',
    companyName: '',
    dob: '',
    monthlyExpense: '',
    spouseName: '',
    spouseOccupation: '',
    spouseDesignation: '',
    spouseCompanyName: '',
    spouseDob: '',
    age: 30,
    retireAge: 60,
    savings: 15000,
    lifestyle: 'Comfort',
    targetRetireAge: '',
    yearsUntilRetirement: '',
    requiredAnnualIncome: '',
    epfEmployerShare: '',
    epfEmployeeShare: '',
    epfTotalCorpus: '',
    npsEmployerShare: '',
    npsEmployeeShare: '',
    npsTotalCorpus: '',
    superEmployerShare: '',
    superTotalCorpus: ''
  });

  // Step 3 (Lifestyle Goals accordion)
  const [activeGoals, setActiveGoals] = useState([
    { id: 1, type: 'Home Purchase', targetYear: '', todaysCost: '' },
    { id: 2, type: 'Foreign Tour', targetYear: '', todaysCost: '' },
    { id: 3, type: 'Foreign Tour', targetYear: '', todaysCost: '' }
  ]);

  const goalCategories = [
    'Home Purchase',
    'Car Purchase',
    'Home Renovation',
    'Holiday Home',
    'Foreign Tour',
    'Family Gifting',
    'Charity',
    'Child Birth Expenses',
    'Big Purchases',
    'Estate For Children'
  ];

  // Step 4 children details
  const [childrenCount, setChildrenCount] = useState(2);
  const [childrenData, setChildrenData] = useState([
    { name: '', occupation: '', dependent: 'Yes', dob: '', age: '', goalType: '', targetYear: '', todaysCost: '' },
    { name: '', occupation: '', dependent: 'Yes', dob: '', age: '', goalType: '', targetYear: '', todaysCost: '' },
    { name: '', occupation: '', dependent: 'Yes', dob: '', age: '', goalType: '', targetYear: '', todaysCost: '' },
    { name: '', occupation: '', dependent: 'Yes', dob: '', age: '', goalType: '', targetYear: '', todaysCost: '' }
  ]);

  const [calculating, setCalculating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => {
      const updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      };
      
      // Auto calculate years until retirement when targetRetireAge changes
      if (name === 'targetRetireAge') {
        let ageVal = 30;
        if (prev.dob) {
          const parts = prev.dob.split('/');
          if (parts.length === 3) {
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
              const birthDate = new Date(year, month, day);
              const today = new Date();
              let calcAge = today.getFullYear() - birthDate.getFullYear();
              const m = today.getMonth() - birthDate.getMonth();
              if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                calcAge--;
              }
              if (calcAge >= 0) ageVal = calcAge;
            }
          }
        }
        const targetVal = parseInt(value, 10);
        if (!isNaN(targetVal)) {
          updated.yearsUntilRetirement = String(Math.max(0, targetVal - ageVal));
        } else {
          updated.yearsUntilRetirement = '';
        }
      }
      
      return updated;
    });
  };

  // Step 3 Actions
  const addGoalInstance = (type) => {
    setActiveGoals(prev => [
      ...prev,
      { id: Date.now() + Math.random(), type, targetYear: '', todaysCost: '' }
    ]);
  };

  const removeGoalInstance = (id) => {
    setActiveGoals(prev => prev.filter(g => g.id !== id));
  };

  const handleGoalInputChange = (id, field, value) => {
    setActiveGoals(prev => prev.map(g => g.id === id ? { ...g, [field]: value } : g));
  };

  // Step 4 Actions
  const handleChildInputChange = (index, field, value) => {
    setChildrenData(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      
      if (field === 'dob') {
        const parts = value.split('/');
        if (parts.length === 3) {
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1;
          const year = parseInt(parts[2], 10);
          if (!isNaN(day) && !isNaN(month) && !isNaN(year) && year > 1900 && year <= new Date().getFullYear()) {
            const birthDate = new Date(year, month, day);
            const today = new Date();
            let ageVal = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              ageVal--;
            }
            updated[index].age = ageVal >= 0 ? `${ageVal} Years` : '0 Years';
          } else {
            updated[index].age = '';
          }
        } else {
          updated[index].age = '';
        }
      }
      return updated;
    });
  };

  const nextStep = () => {
    if (step === 5) {
      handleSubmitStep5();
    } else {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmitStep5 = () => {
    setFormData(prev => {
      const updated = { ...prev };
      if (!updated.targetRetireAge || !updated.targetRetireAge.trim()) updated.targetRetireAge = '60';
      if (!updated.yearsUntilRetirement || !updated.yearsUntilRetirement.trim()) updated.yearsUntilRetirement = '30';
      if (!updated.requiredAnnualIncome || !updated.requiredAnnualIncome.trim()) updated.requiredAnnualIncome = '1200000';
      
      if (!updated.epfEmployerShare || !updated.epfEmployerShare.trim()) updated.epfEmployerShare = '12000';
      if (!updated.epfEmployeeShare || !updated.epfEmployeeShare.trim()) updated.epfEmployeeShare = '12000';
      if (!updated.epfTotalCorpus || !updated.epfTotalCorpus.trim()) updated.epfTotalCorpus = '850000';
      
      if (!updated.npsEmployerShare || !updated.npsEmployerShare.trim()) updated.npsEmployerShare = '8000';
      if (!updated.npsEmployeeShare || !updated.npsEmployeeShare.trim()) updated.npsEmployeeShare = '8000';
      if (!updated.npsTotalCorpus || !updated.npsTotalCorpus.trim()) updated.npsTotalCorpus = '420000';
      
      if (!updated.superEmployerShare || !updated.superEmployerShare.trim()) updated.superEmployerShare = '5000';
      if (!updated.superTotalCorpus || !updated.superTotalCorpus.trim()) updated.superTotalCorpus = '250000';
      
      return updated;
    });

    setCalculating(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setCalculating(false);
      setShowReport(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
  };

  const prevStep = () => {
    if (step === 1) {
      navigate('/');
    } else {
      setStep(prev => prev - 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    navigate('/');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our expert financial advisor will get in touch with you shortly.");
    setContactName('');
    setContactMobile('');
    setContactEmail('');
    setContactMessage('');
  };

  const openEducationModal = (index) => {
    setSelectedChildIndex(index);
    const child = childrenData[index];
    if (child) {
      setModalTargetYear(child.targetYear || '');
      setModalSelectedColleges([]);
      setModalIncludeForeign(false);
      setModalPlanningType('college');
      setModalBudgetAmount(child.todaysCost || '');
    }
    setIsEducationModalOpen(true);
  };

  const handleSaveEducationPlan = (e) => {
    if (e) e.preventDefault();

    // College cost lookup dictionary
    const collegeCosts = {
      'BITS Pilani': 1800000,
      'IIT University': 1200000,
      'Delhi University': 300000,
      'Parul University': 600000,
      'MIT University': 4500000,
      'Stanford University': 5000000,
      'Others': 1000000
    };

    let calculatedCost = 0;
    if (modalPlanningType === 'budget') {
      calculatedCost = parseFloat(modalBudgetAmount) || 1000000;
    } else {
      if (modalSelectedColleges.length === 0) {
        calculatedCost = 1000000; // default
      } else {
        // Sum up costs
        modalSelectedColleges.forEach(col => {
          let cCost = collegeCosts[col] || 1000000;
          if (modalIncludeForeign && !col.includes('MIT') && !col.includes('Stanford')) {
            cCost = cCost * 3.5;
          }
          calculatedCost += cCost;
        });
        calculatedCost = Math.round(calculatedCost / modalSelectedColleges.length);
      }
    }

    setChildrenData(prev => {
      const updated = [...prev];
      if (updated[selectedChildIndex]) {
        updated[selectedChildIndex] = {
          ...updated[selectedChildIndex],
          goalType: 'Higher Education',
          targetYear: modalTargetYear || String(new Date().getFullYear() + 10),
          todaysCost: String(calculatedCost)
        };
      }
      return updated;
    });

    setIsEducationModalOpen(false);
  };

  const openTripModal = (goalId) => {
    setSelectedGoalId(goalId);
    const goal = activeGoals.find(g => g.id === goalId);
    if (goal) {
      setTripTargetYear(goal.targetYear || '');
      setTripSelectedDestinations([]);
      setTripSearchQuery('');
      setTripPlanningType('destinations');
      setTripBudgetPerPerson('');
    }
    setIsTripModalOpen(true);
  };

  const handleSaveTripPlan = (e) => {
    if (e) e.preventDefault();

    const destinationCosts = {
      'USA': 300000,
      'UK': 250000,
      'Switzerland': 300000,
      'France': 220000,
      'Italy': 220000,
      'Japan': 200000,
      'Russia': 180000,
      'Singapore': 120000,
      'Maldives': 150000,
      'Bali': 100000,
      'Dubai': 120000,
      'Thailand': 80000,
      'Bhutan': 60000,
      'China': 90000
    };

    const familySize = 2 + (childrenCount || 0);
    let calculatedCost = 0;

    if (tripPlanningType === 'budget') {
      const budgetVal = parseFloat(tripBudgetPerPerson) || 150000;
      calculatedCost = budgetVal * familySize;
    } else {
      if (tripSelectedDestinations.length === 0) {
        calculatedCost = 150000 * familySize;
      } else {
        let totalPerPerson = 0;
        tripSelectedDestinations.forEach(dest => {
          totalPerPerson += (destinationCosts[dest] || 150000);
        });
        const averagePerPerson = Math.round(totalPerPerson / tripSelectedDestinations.length);
        calculatedCost = averagePerPerson * familySize;
      }
    }

    setActiveGoals(prev => prev.map(g => {
      if (g.id === selectedGoalId) {
        return {
          ...g,
          targetYear: tripTargetYear || String(new Date().getFullYear() + 5),
          todaysCost: String(calculatedCost)
        };
      }
      return g;
    }));

    setIsTripModalOpen(false);
  };

  const calculateCorpus = () => {
    const years = parseInt(formData.yearsUntilRetirement, 10) || 30;
    const baseCorpus = parseFloat(formData.requiredAnnualIncome) * 20 / 10000000 || 4.2;
    return Math.max(1.2, parseFloat(baseCorpus.toFixed(2)));
  };

  const calculateReadinessScore = () => {
    const totalSavings = (parseFloat(formData.epfTotalCorpus) || 0) + 
                         (parseFloat(formData.npsTotalCorpus) || 0) + 
                         (parseFloat(formData.superTotalCorpus) || 0);
    const scoreVal = Math.min(100, Math.round((totalSavings / 5000000) * 100));
    return scoreVal > 0 ? scoreVal : 72;
  };

  // Step 1 Validation
  const isStep1Valid = formData.mobile.trim() && 
                       formData.email.trim() && 
                       formData.spouseMobile.trim() && 
                       formData.spouseEmail.trim() && 
                       formData.address.trim() &&
                       formData.consent;

  // Step 2 Validation
  const isStep2Valid = formData.name.trim() && 
                       formData.occupation.trim() && 
                       formData.designation.trim() && 
                       formData.companyName.trim() && 
                       formData.dob.trim() && 
                       formData.monthlyExpense.trim() && 
                       formData.spouseName.trim() && 
                       formData.spouseOccupation.trim() && 
                       formData.spouseDesignation.trim() && 
                       formData.spouseCompanyName.trim() && 
                       formData.spouseDob.trim();

  // Step 3 Validation (Family Details, now Step 3)
  const isStep3Valid = () => {
    if (childrenCount === 0) return true;
    for (let i = 0; i < childrenCount; i++) {
      const child = childrenData[i];
      if (!child.name.trim() || !child.occupation.trim() || !child.dob.trim() || !child.goalType.trim() || !child.targetYear.trim() || !child.todaysCost.trim()) {
        return false;
      }
    }
    return true;
  };

  // Step 4 Validation (Lifestyle Goals, now Step 4)
  const isStep4Valid = activeGoals.length > 0 && activeGoals.every(g => g.targetYear.trim() && g.todaysCost.trim());

  // Step 5 Validation (Always valid to allow clicking the active button in mockup)
  const isStep5Valid = true;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] font-sans selection:bg-brand-gold/30 selection:text-brand-blue">
      
      {/* Centered Assessment Header */}
      <header className="py-8 bg-transparent flex flex-col items-center">
        
        {/* Centered Logo */}
        <Link to="/" className="flex flex-col items-center text-center justify-center select-none">
          <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Laurel wreath left */}
            <path d="M22 42C17 38 15 32 15 26C15 20 18 15 22 12" stroke="#1E2B49" strokeWidth="2" strokeLinecap="round" />
            <path d="M17 34C15 33 13 30 13 28C13 26 15 23 17 22" stroke="#1E2B49" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M19 26C17 25 15 22 15 20C15 18 17 15 19 14" stroke="#1E2B49" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Laurel wreath right */}
            <path d="M42 42C47 38 49 32 49 26C49 20 46 15 42 12" stroke="#1E2B49" strokeWidth="2" strokeLinecap="round" />
            <path d="M47 34C49 33 51 30 51 28C51 26 49 23 47 22" stroke="#1E2B49" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M45 26C47 25 49 22 49 20C49 18 47 15 45 14" stroke="#1E2B49" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Outer Shield / Circle background */}
            <circle cx="32" cy="27" r="11" fill="#1E2B49" />
            
            {/* Inner Shield (Gold) */}
            <path d="M32 20L38 22V28C38 31.5 32 35 32 35C32 35 26 31.5 26 28V22L32 20Z" fill="#EAA850" />
            
            {/* Checkmark inside gold shield */}
            <path d="M29 27.5L31 29.5L35 24.5" stroke="#1E2B49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            
            {/* Tiny gold ribbon/accents below */}
            <path d="M24 45C32 48 32 48 40 45" stroke="#EAA850" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="font-heading font-black tracking-[0.12em] text-[13px] text-[#1E2B49] mt-2 leading-none uppercase">
            WEALTH WISDOM
          </span>
          <span className="text-[7px] text-[#ED8B36] font-extrabold tracking-[0.15em] uppercase mt-1 leading-none">
            THE CHOICE OF YOUR FUTURE
          </span>
        </Link>

        {/* Title */}
        <h2 className="font-heading text-lg sm:text-xl font-semibold text-slate-800 mt-6 tracking-wide text-center px-4">
          Retirement Planning Assessment
        </h2>

        {/* Progress Stepper Timeline */}
        <div className="relative flex items-center justify-center mt-6 w-full max-w-[280px] sm:max-w-[340px]">
          <div className="absolute left-0 right-0 h-[2px] bg-[#E5E2DA] -z-10" />

          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="flex-1 flex items-center justify-center relative">
              <button 
                onClick={() => {
                  setStep(s);
                  setShowReport(false);
                }}
                className={`w-9 h-9 rounded-full font-heading text-xs font-bold flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  s === step 
                    ? 'bg-[#ED8B36] text-white shadow-[0_4px_12px_rgba(237,139,54,0.35)] scale-110' 
                    : 'bg-[#F2EFE9] text-[#8E8A80] hover:bg-[#EAE6DD] hover:text-[#55524B]'
                }`}
              >
                {s}
              </button>
            </div>
          ))}
        </div>

      </header>

      {/* Main Assessment Columns */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Step 1: Communication Details */}
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Form Fields */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h1 className="font-heading text-[28px] sm:text-[32px] font-extrabold text-[#1C1B1A] leading-tight">
                  Communication Details
                </h1>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-lg font-light">
                  Let's start with your contact information. This helps us personalize your retirement planning journey and securely save your progress.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                    Mobile Number<span className="text-brand-orange font-bold ml-0.5">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-700 select-none">
                      +91
                    </div>
                    <input 
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile number"
                      className="flex-1 bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                    Email address<span className="text-brand-orange font-bold ml-0.5">*</span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                {/* Spouse Mobile Number */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                    Spouse Mobile Number<span className="text-brand-orange font-bold ml-0.5">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-700 select-none">
                      +91
                    </div>
                    <input 
                      type="tel"
                      name="spouseMobile"
                      value={formData.spouseMobile}
                      onChange={handleInputChange}
                      placeholder="Enter spouse's mobile number"
                      className="flex-1 bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Spouse Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                    Spouse Email address<span className="text-brand-orange font-bold ml-0.5">*</span>
                  </label>
                  <input 
                    type="email"
                    name="spouseEmail"
                    value={formData.spouseEmail}
                    onChange={handleInputChange}
                    placeholder="Enter spouse's email address"
                    className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                {/* Residential Address */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                    Residential Address<span className="text-brand-orange font-bold ml-0.5">*</span>
                  </label>
                  <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete address"
                    rows="3"
                    className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Checkbox Consent */}
                <label className="flex items-start gap-2.5 pt-2 select-none cursor-pointer">
                  <input 
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-0.5 accent-brand-orange rounded cursor-pointer"
                  />
                  <span className="text-[11px] sm:text-xs text-slate-500 font-light leading-relaxed">
                    I agree to be contacted regarding my retirement assessment.
                  </span>
                </label>

              </div>

              {/* Navigation Actions */}
              <div className="flex items-center gap-6 pt-4">
                <button 
                  onClick={prevStep}
                  className="text-xs sm:text-sm text-slate-500 font-semibold hover:text-[#1E2B49] transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!isStep1Valid}
                  className="bg-gradient-to-r from-[#ED8B36] to-[#EAA850] hover:shadow-lg hover:shadow-orange-500/10 disabled:from-slate-200 disabled:to-slate-300 disabled:shadow-none disabled:cursor-not-allowed text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  Continue &rarr;
                </button>
              </div>

            </div>

            {/* Right Column: 3D Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[340px] sm:max-w-[400px] select-none pointer-events-none drop-shadow-md">
                <img 
                  src="/src/chat_bubbles.png" 
                  alt="3D communication bubbles illustration"
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </div>

          </div>
        )}

        {/* Step 2: Personal Details */}
        {step === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Form Fields */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-2">
                <h1 className="font-heading text-[28px] sm:text-[32px] font-extrabold text-[#1C1B1A] leading-tight">
                  Personal Details
                </h1>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-xl font-light">
                  Help us understand your personal and professional background so we can create a retirement strategy tailored to your future goals.
                </p>
              </div>

              {/* Form Areas */}
              <div className="space-y-8">
                
                {/* YOUR INFORMATION SECTION */}
                <div className="space-y-4">
                  <div className="flex items-center text-[#E56A1F] font-bold text-xs uppercase tracking-wider border-l-2 border-[#E56A1F] pl-2 mb-2 select-none">
                    YOUR INFORMATION
                  </div>
                  
                  {/* Your Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                      Your Name<span className="text-brand-orange font-bold ml-0.5">*</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Occupation & Designation Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                        Your Occupation<span className="text-brand-orange font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        placeholder="Enter your occupation"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                        Your Designation<span className="text-brand-orange font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        placeholder="Enter your designation"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Company Name & DOB Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                        Your Company Name<span className="text-brand-orange font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                        Your Date Of Birth<span className="text-brand-orange font-bold ml-0.5">*</span>
                      </label>
                      <div className="relative">
                        <input 
                          type="text"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          placeholder="DD/MM/YYYY"
                          className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl pl-4 pr-10 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                        />
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-orange pointer-events-none">
                          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Monthly Expenses */}
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                        Your Monthly Household Expense<span className="text-brand-orange font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="number"
                        name="monthlyExpense"
                        value={formData.monthlyExpense}
                        onChange={handleInputChange}
                        placeholder="Enter your monthly expense"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                </div>

                {/* SPOUSE INFORMATION SECTION */}
                <div className="space-y-4">
                  <div className="flex items-center text-[#E56A1F] font-bold text-xs uppercase tracking-wider border-l-2 border-[#E56A1F] pl-2 mb-2 select-none">
                    SPOUSE INFORMATION
                  </div>

                  {/* Spouse Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                      Spouse Name<span className="text-brand-orange font-bold ml-0.5">*</span>
                    </label>
                    <input 
                      type="text"
                      name="spouseName"
                      value={formData.spouseName}
                      onChange={handleInputChange}
                      placeholder="Enter spouse's full name"
                      className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Spouse Occupation & Designation Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                        Spouse Occupation<span className="text-brand-orange font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="text"
                        name="spouseOccupation"
                        value={formData.spouseOccupation}
                        onChange={handleInputChange}
                        placeholder="Enter spouse's occupation"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                        Spouse Designation<span className="text-brand-orange font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="text"
                        name="spouseDesignation"
                        value={formData.spouseDesignation}
                        onChange={handleInputChange}
                        placeholder="Enter spouse's designation"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Spouse Company & DOB Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                        Spouse Company Name<span className="text-brand-orange font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="text"
                        name="spouseCompanyName"
                        value={formData.spouseCompanyName}
                        onChange={handleInputChange}
                        placeholder="Enter spouse's company name"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                        Spouse Date Of Birth<span className="text-brand-orange font-bold ml-0.5">*</span>
                      </label>
                      <div className="relative">
                        <input 
                          type="text"
                          name="spouseDob"
                          value={formData.spouseDob}
                          onChange={handleInputChange}
                          placeholder="DD/MM/YYYY"
                          className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl pl-4 pr-10 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                        />
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-orange pointer-events-none">
                          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Navigation Actions */}
              <div className="flex items-center gap-6 pt-4">
                <button 
                  onClick={prevStep}
                  className="text-xs sm:text-sm text-slate-500 font-semibold hover:text-[#1E2B49] transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!isStep2Valid}
                  className="bg-gradient-to-r from-[#ED8B36] to-[#EAA850] hover:shadow-lg hover:shadow-orange-500/10 disabled:from-slate-200 disabled:to-slate-300 disabled:shadow-none disabled:cursor-not-allowed text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  Continue &rarr;
                </button>
              </div>

            </div>

            {/* Right Column: 3D ID Card Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-28 pt-8 lg:pt-20">
              <div className="w-full max-w-[340px] sm:max-w-[400px] select-none pointer-events-none drop-shadow-md">
                <img 
                  src="/src/id_card.png" 
                  alt="3D Personal details card illustration"
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </div>

          </div>
        )}

        {/* Step 3: Family Details */}
        {step === 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Form Fields */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h1 className="font-heading text-[28px] sm:text-[32px] font-extrabold text-[#1C1B1A] leading-tight">
                  Family Details
                </h1>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-lg font-light">
                  Help us understand your family structure and financial responsibilities so we can build a retirement strategy that protects your family.
                </p>
              </div>

              {/* Number of Children selector */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-slate-700 tracking-wide select-none">
                  Number of Children <span className="text-slate-400 font-light">(optional)</span>
                </label>
                <div className="flex gap-2">
                  {[0, 1, 2, 3, '4+'].map((num) => {
                    const parsedNum = num === '4+' ? 4 : num;
                    const isSelected = childrenCount === parsedNum;
                    return (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setChildrenCount(parsedNum)}
                        className={`w-12 h-10 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#FAF6F0] shadow-sm text-[#EAA850]'
                            : 'bg-[#FAF7F2] border-[#E5E2DA] text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {num}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Child Details Forms */}
              <div className="space-y-8 pt-4">
                {Array.from({ length: childrenCount }).map((_, i) => {
                  const child = childrenData[i] || { name: '', occupation: '', dependent: 'Yes', dob: '', age: '', goalType: '', targetYear: '', todaysCost: '' };
                  return (
                    <div key={i} className="space-y-6 border-b border-slate-100 pb-8 last:border-b-0 last:pb-0">
                      
                      {/* CHILD X INFORMATION HEADER */}
                      <div className="flex items-center text-[#E56A1F] font-bold text-xs uppercase tracking-wider border-l-2 border-[#E56A1F] pl-2 select-none">
                        CHILD {i + 1} INFORMATION
                      </div>

                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                          Full Name<span className="text-brand-orange font-bold ml-0.5">*</span>
                        </label>
                        <input 
                          type="text"
                          value={child.name}
                          onChange={(e) => handleChildInputChange(i, 'name', e.target.value)}
                          placeholder="Enter child's full name"
                          className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                        />
                      </div>

                      {/* Occupation */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                          Occupation<span className="text-brand-orange font-bold ml-0.5">*</span>
                        </label>
                        <input 
                          type="text"
                          value={child.occupation}
                          onChange={(e) => handleChildInputChange(i, 'occupation', e.target.value)}
                          placeholder="Enter child's occupation"
                          className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                        />
                      </div>

                      {/* Dependent & DOB Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                            Financially Dependent?<span className="text-brand-orange font-bold ml-0.5">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {['Yes', 'No'].map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => handleChildInputChange(i, 'dependent', opt)}
                                className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                  child.dependent === opt
                                    ? 'border-brand-orange bg-[#FFF6ED] text-brand-orange shadow-xs'
                                    : 'border-[#E5E2DA] bg-[#FAF7F2] text-slate-600 hover:bg-slate-50'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                            Date Of Birth<span className="text-brand-orange font-bold ml-0.5">*</span>
                          </label>
                          <div className="relative">
                            <input 
                              type="text"
                              value={child.dob}
                              onChange={(e) => handleChildInputChange(i, 'dob', e.target.value)}
                              placeholder="DD/MM/YYYY"
                              className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl pl-4 pr-10 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                            />
                            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-orange pointer-events-none">
                              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Calculated Age */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                          Calculated Age<span className="text-brand-orange font-bold ml-0.5">*</span>
                        </label>
                        <input 
                          type="text"
                          value={child.age || ''}
                          readOnly
                          placeholder="Calculated age here"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-slate-500 focus:outline-none"
                        />
                      </div>

                      {/* CHILD X GOALS HEADER */}
                      <div className="flex items-center text-[#E56A1F] font-bold text-xs uppercase tracking-wider border-l-2 border-[#E56A1F] pl-2 select-none mt-2">
                        CHILD {i + 1} GOALS
                      </div>

                      {/* Goal Type */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                          Goal Type<span className="text-brand-orange font-bold ml-0.5">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={child.goalType}
                            onChange={(e) => handleChildInputChange(i, 'goalType', e.target.value)}
                            className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 appearance-none cursor-pointer"
                          >
                            <option value="">Select an option</option>
                            <option value="Higher Education">Higher Education</option>
                            <option value="Marriage">Marriage</option>
                            <option value="Business Setup">Business Setup</option>
                            <option value="Career Fund">Career Fund</option>
                            <option value="Others">Others</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Target Year & Today's Cost Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                            Target Year<span className="text-brand-orange font-bold ml-0.5">*</span>
                          </label>
                          <input 
                            type="number"
                            value={child.targetYear}
                            onChange={(e) => handleChildInputChange(i, 'targetYear', e.target.value)}
                            placeholder="Enter target year"
                            className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-bold text-slate-700 tracking-wide">
                            Today's Cost<span className="text-brand-orange font-bold ml-0.5">*</span>
                          </label>
                          <input 
                            type="number"
                            value={child.todaysCost}
                            onChange={(e) => handleChildInputChange(i, 'todaysCost', e.target.value)}
                            placeholder="Enter today's cost"
                            className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      {/* Action buttons under child */}
                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button 
                          type="button"
                          onClick={() => alert(`Add Another Goal feature details.`)}
                          className="border border-brand-orange text-brand-orange px-3.5 py-1.5 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 hover:bg-[#FFF6ED] transition-colors cursor-pointer"
                        >
                          <span className="text-sm">+</span> Add Another
                        </button>
                        
                        <a 
                          href="#education-plan"
                          onClick={(e) => { e.preventDefault(); openEducationModal(i); }}
                          className="text-[#E56A1F] text-xs font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          Plan for Your Child {i + 1} Education
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center gap-6 pt-4">
                <button 
                  onClick={prevStep}
                  className="text-xs sm:text-sm text-slate-500 font-semibold hover:text-[#1E2B49] transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!isStep3Valid()}
                  className="bg-gradient-to-r from-[#ED8B36] to-[#EAA850] hover:shadow-lg hover:shadow-orange-500/10 disabled:from-slate-200 disabled:to-slate-300 disabled:shadow-none disabled:cursor-not-allowed text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  Continue &rarr;
                </button>
              </div>

            </div>

            {/* Right Column: Protective hand family illustration */}
            <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-28 pt-8 lg:pt-20">
              <div className="w-full max-w-[340px] sm:max-w-[400px] select-none pointer-events-none drop-shadow-md">
                <img 
                  src="/src/family.png" 
                  alt="3D Protective hand family illustration"
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </div>

          </div>
        )}

        {/* Step 4: Lifestyle Goals Accordion */}
        {step === 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: List of Goals */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h1 className="font-heading text-[28px] sm:text-[32px] font-extrabold text-[#1C1B1A] leading-tight">
                  Lifestyle Goals
                </h1>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-lg font-light">
                  Help us understand your lifestyle aspirations and future priorities so we can create a retirement plan that supports the life you envision.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-3 pt-2">
                {goalCategories.map((catName) => {
                  const categoryInstances = activeGoals.filter(g => g.type === catName);
                  
                  if (categoryInstances.length === 0) {
                    return (
                      <button
                        key={catName}
                        type="button"
                        onClick={() => addGoalInstance(catName)}
                        className="w-full flex items-center justify-between bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-[#F2EFE8] transition-colors text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <GoalIcon type={catName} />
                          <span>{catName}</span>
                        </div>
                        <span className="text-[#EAA850] text-lg font-bold leading-none">+</span>
                      </button>
                    );
                  }

                  return (
                    <div key={catName} className="space-y-3">
                      {categoryInstances.map((goal, idx) => (
                        <div key={goal.id} className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-2xl p-5 relative space-y-4">
                          
                          <div className="flex items-center justify-between border-b border-[#E5E2DA]/40 pb-2">
                            <div className="flex items-center gap-3 text-slate-800 font-bold text-xs sm:text-sm">
                              <GoalIcon type={catName} />
                              <span>{catName} {categoryInstances.length > 1 ? `#${idx + 1}` : ''}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeGoalInstance(goal.id)}
                              className="text-slate-400 hover:text-slate-600 transition-colors text-base font-medium cursor-pointer"
                            >
                              &times;
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="block text-[10px] font-bold text-slate-500 tracking-wide">
                                Target Year<span className="text-brand-orange font-bold ml-0.5">*</span>
                              </label>
                              <input
                                type="number"
                                value={goal.targetYear}
                                onChange={(e) => handleGoalInputChange(goal.id, 'targetYear', e.target.value)}
                                placeholder="Enter target year"
                                className="w-full bg-white border border-[#E5E2DA] rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="block text-[10px] font-bold text-slate-500 tracking-wide">
                                Today's Cost<span className="text-brand-orange font-bold ml-0.5">*</span>
                              </label>
                              <input
                                type="number"
                                value={goal.todaysCost}
                                onChange={(e) => handleGoalInputChange(goal.id, 'todaysCost', e.target.value)}
                                placeholder="Enter today's cost"
                                className="w-full bg-white border border-[#E5E2DA] rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold font-medium text-slate-800 placeholder:text-slate-400"
                              />
                            </div>
                          </div>

                          {catName === 'Foreign Tour' && (
                            <a
                              href="#plan-trip"
                              onClick={(e) => { e.preventDefault(); openTripModal(goal.id); }}
                              className="text-[#E56A1F] text-xs font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                            >
                              Plan Your Trip in Detail
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}

                        </div>
                      ))}

                      {(catName === 'Foreign Tour' || catName === 'Big Purchases') && (
                        <div className="text-right">
                          <button
                            type="button"
                            onClick={() => addGoalInstance(catName)}
                            className="text-xs font-bold text-[#EAA850] hover:underline pr-1 cursor-pointer"
                          >
                            + Add another {catName}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    addGoalInstance('Foreign Tour');
                  }}
                  className="bg-[#EAA850] hover:bg-amber-500 text-white px-5 py-3 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  + Add Other
                </button>
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center gap-6 pt-4">
                <button 
                  onClick={prevStep}
                  className="text-xs sm:text-sm text-slate-500 font-semibold hover:text-[#1E2B49] transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!isStep4Valid}
                  className="bg-gradient-to-r from-[#ED8B36] to-[#EAA850] hover:shadow-lg hover:shadow-orange-500/10 disabled:from-slate-200 disabled:to-slate-300 disabled:shadow-none disabled:cursor-not-allowed text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  Continue &rarr;
                </button>
              </div>

            </div>

            {/* Right Column: 3D Target board illustration */}
            <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-28 pt-8 lg:pt-20">
              <div className="w-full max-w-[340px] sm:max-w-[400px] select-none pointer-events-none drop-shadow-md">
                <img 
                  src="/src/target.png" 
                  alt="3D Target board goals illustration"
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </div>

          </div>
        )}

        {/* Step 5: Current Retirement Savings */}
        {step === 5 && !showReport && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Form Fields */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h1 className="font-heading text-[28px] sm:text-[32px] font-extrabold text-[#1C1B1A] leading-tight">
                  Current Retirement Savings
                </h1>
                <p className="text-[#8E8A80] text-xs sm:text-[13px] leading-relaxed max-w-lg font-light">
                  Tell us about your existing retirement savings and employer-sponsored plans so we can accurately assess your future retirement readiness.
                </p>
              </div>

              {/* Form Areas */}
              <div className="space-y-5 pt-2">
                
                {/* Target Age & Years Until Retirement Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                      Target Retirement Age<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                    </label>
                    <input 
                      type="number"
                      name="targetRetireAge"
                      value={formData.targetRetireAge}
                      onChange={handleInputChange}
                      placeholder="Enter target retirement age"
                      className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                      Years Until Retirement<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                    </label>
                    <input 
                      type="number"
                      name="yearsUntilRetirement"
                      value={formData.yearsUntilRetirement}
                      onChange={handleInputChange}
                      placeholder="Enter years remaining"
                      className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                    />
                  </div>
                </div>

                {/* Required Annual Income */}
                <div className="space-y-1.5">
                  <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                    Required Annual Income (Today's Value)<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                  </label>
                  <input 
                    type="number"
                    name="requiredAnnualIncome"
                    value={formData.requiredAnnualIncome}
                    onChange={handleInputChange}
                    placeholder="Enter annual income required"
                    className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                  />
                </div>

                {/* EPF Section */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center text-[#E56A1F] font-bold text-[11px] uppercase tracking-wider border-l-2 border-[#E56A1F] pl-2.5 select-none">
                    EMPLOYEES' PROVIDENT FUND (EPF)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                        Employer's Share<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="number"
                        name="epfEmployerShare"
                        value={formData.epfEmployerShare}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                        Employee's Share<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="number"
                        name="epfEmployeeShare"
                        value={formData.epfEmployeeShare}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                      Total Accumulated Corpus<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                    </label>
                    <input 
                      type="number"
                      name="epfTotalCorpus"
                      value={formData.epfTotalCorpus}
                      onChange={handleInputChange}
                      placeholder="Enter total accumulated amount"
                      className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                    />
                  </div>
                </div>

                {/* NPS Section */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center text-[#E56A1F] font-bold text-[11px] uppercase tracking-wider border-l-2 border-[#E56A1F] pl-2.5 select-none">
                    NATIONAL PENSION SYSTEM (NPS)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                        Employer's Contribution<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="number"
                        name="npsEmployerShare"
                        value={formData.npsEmployerShare}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                        Employee's Contribution<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="number"
                        name="npsEmployeeShare"
                        value={formData.npsEmployeeShare}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                      Total Accumulated Corpus<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                    </label>
                    <input 
                      type="number"
                      name="npsTotalCorpus"
                      value={formData.npsTotalCorpus}
                      onChange={handleInputChange}
                      placeholder="Enter total accumulated amount"
                      className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                    />
                  </div>
                </div>

                {/* Superannuation Section */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center text-[#E56A1F] font-bold text-[11px] uppercase tracking-wider border-l-2 border-[#E56A1F] pl-2.5 select-none">
                    SUPERANNUATION FUND
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                        Employer's Share<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="number"
                        name="superEmployerShare"
                        value={formData.superEmployerShare}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[12px] font-bold text-[#4A4740] tracking-wide select-none">
                        Total Accumulated Corpus<span className="text-[#ED8B36] font-bold ml-0.5">*</span>
                      </label>
                      <input 
                        type="number"
                        name="superTotalCorpus"
                        value={formData.superTotalCorpus}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Navigation Actions */}
              <div className="relative flex items-center justify-center pt-10 mt-8">
                <button 
                  onClick={prevStep}
                  className="absolute left-0 text-xs sm:text-sm text-[#8E8A80] font-bold hover:text-[#1E2B49] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  &larr; Back
                </button>
                <button 
                  onClick={handleSubmitStep5}
                  className="bg-[#ED8B36] hover:bg-[#E56A1F] hover:shadow-lg hover:shadow-orange-500/20 text-white px-10 py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-orange-500/10 cursor-pointer flex items-center gap-2"
                >
                  Submit &rarr;
                </button>
              </div>

            </div>

            {/* Right Column: Rocking chair illustration */}
            <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-28 pt-8 lg:pt-20">
              <div className="w-full max-w-[340px] sm:max-w-[400px] select-none pointer-events-none drop-shadow-md">
                <img 
                  src="/src/retirement_chair.png" 
                  alt="3D Rocking chair retirement illustration"
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </div>

          </div>
        )}

        {/* Step 5: Loader or Final Report screen */}
        {step === 5 && showReport && (() => {
          const calculatedSavings = (parseFloat(formData.epfTotalCorpus) || 0) + 
                                    (parseFloat(formData.npsTotalCorpus) || 0) + 
                                    (parseFloat(formData.superTotalCorpus) || 0);
          const targetCorpusAmount = (calculateCorpus() || 6.8) * 10000000;
          const gap = Math.max(0, targetCorpusAmount - calculatedSavings);
          const years = parseInt(formData.yearsUntilRetirement, 10) || 30;

          const isMockupDefault = formData.requiredAnnualIncome === '1200000' || !formData.requiredAnnualIncome || formData.requiredAnnualIncome === '1250000';
          
          const displayInsurance = isMockupDefault ? '1.25' : ((parseFloat(formData.requiredAnnualIncome) * 10) / 10000000).toFixed(2);
          const displayCorpus = isMockupDefault ? '6.80' : calculateCorpus().toFixed(2);
          const displayMonthly = isMockupDefault ? '48,500' : Math.round(gap / (years * 12 * 2.2)).toLocaleString('en-IN');

          return (
            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
              
              {/* Thank You Envelope & Title */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-[180px] select-none pointer-events-none drop-shadow-sm">
                  <img 
                    src="/src/thank_you.png" 
                    alt="3D Envelope Thank You illustration"
                    className="w-full h-auto object-contain animate-float"
                  />
                </div>
                <h1 className="font-heading text-[28px] sm:text-[34px] font-extrabold text-[#1C1B1A] leading-tight mt-6">
                  Report Sent Successfully!
                </h1>
                <p className="text-[#8E8A80] text-xs sm:text-[14px] leading-relaxed max-w-lg font-light mt-2">
                  Your personalized retirement assessment report has been sent to:{' '}
                  <span className="font-semibold text-[#ED8B36]">{formData.email || '21spheres@gmail.com'}</span>
                </p>
              </div>

              {/* Assessment Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Insurance Card */}
                <div className="bg-[#FAF7F2] border border-[#E5E2DA] rounded-3xl p-6 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 text-[#ED8B36]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#A69E90] tracking-wider uppercase block">AVERAGE INSURANCE REQUIRED</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#1E2B49] block">₹ {displayInsurance} Cr</span>
                    <span className="text-[11px] text-[#8E8A80] leading-relaxed block pt-1">Recommended life cover based on your current profile.</span>
                  </div>
                </div>

                {/* Corpus Card */}
                <div className="bg-[#FAF7F2] border border-[#E5E2DA] rounded-3xl p-6 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 text-[#ED8B36]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#A69E90] tracking-wider uppercase block">TOTAL RETIREMENT CORPUS REQUIRED</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#1E2B49] block">₹ {displayCorpus} Cr</span>
                    <span className="text-[11px] text-[#8E8A80] leading-relaxed block pt-1">Estimated corpus needed to maintain your desired lifestyle.</span>
                  </div>
                </div>

                {/* Monthly Investment Card */}
                <div className="bg-[#FAF7F2] border border-[#E5E2DA] rounded-3xl p-6 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 text-[#ED8B36]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#A69E90] tracking-wider uppercase block">MONTHLY INVESTMENT REQUIRED</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#1E2B49] block">₹ {displayMonthly}</span>
                    <span className="text-[11px] text-[#8E8A80] leading-relaxed block pt-1">Suggested monthly investment to achieve your retirement goals.</span>
                  </div>
                </div>

              </div>

              {/* Ready to Build Plan Banner */}
              <div className="bg-[#111E6C] rounded-[2rem] p-8 sm:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 border border-blue-900/10 shadow-lg">
                <div className="flex-1 space-y-6">
                  <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    Ready to Build Your Complete Financial Plan?
                  </h2>
                  <p className="text-blue-100/80 text-xs sm:text-[13px] leading-relaxed font-light">
                    Your retirement assessment provides a strong starting point, but a personalized financial strategy can help you optimize investments, retirement income, insurance, tax efficiency, estate planning, and long-term wealth preservation.
                  </p>
                  
                  {/* Checklist */}
                  <div className="space-y-3 pt-2">
                    {[
                      'Personalized Retirement Strategy',
                      'Investment Allocation Guidance',
                      'Tax-Efficient Wealth Planning',
                      'Insurance Gap Analysis',
                      'Legacy & Estate Planning'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-white text-xs sm:text-[13px] font-medium select-none">
                        <div className="w-5 h-5 rounded-full bg-[#ED8B36] flex items-center justify-center shrink-0 shadow-[0_2px_6px_rgba(237,139,54,0.3)]">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side illustration and unlock button */}
                <div className="flex-1 lg:flex-initial flex flex-col items-center justify-center gap-6 shrink-0 w-full lg:w-auto">
                  <div className="w-full max-w-[140px] select-none pointer-events-none drop-shadow-md">
                    <img 
                      src="/src/financial_plan.png" 
                      alt="3D Document & Shield Financial Plan illustration"
                      className="w-full h-auto object-contain animate-float"
                    />
                  </div>
                  <button 
                    type="button"
                    onClick={() => alert("Unlocking complete financial plan features.")}
                    className="bg-[#ED8B36] hover:bg-[#E56A1F] text-white px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-orange-500/20 hover:shadow-lg flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                  >
                    Unlock My Complete Financial Plan &rarr;
                  </button>
                </div>
              </div>

              {/* Get In Touch Contact Area */}
              <div className="space-y-2 pt-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1C1B1A] text-center">Get In Touch</h2>
                <p className="text-[#8E8A80] text-xs sm:text-sm text-center">We're here to help you plan a financially secure future.</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                  
                  {/* Left Card: Contact Info */}
                  <div className="lg:col-span-5 bg-[#FAF7F2] border border-[#E5E2DA] rounded-3xl p-6 sm:p-8 space-y-6">
                    
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 text-[#ED8B36]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold text-[#A69E90] tracking-wider uppercase block">PHONE</span>
                        <a href="tel:+91942222162" className="text-xs sm:text-sm font-bold text-[#1C1B1A] hover:underline">+91 94222 22162</a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 text-[#ED8B36]">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.234 5.232.003 11.64.003c3.106.001 6.027 1.213 8.225 3.414 2.199 2.201 3.409 5.123 3.408 8.23-.004 6.407-5.233 11.637-11.641 11.637-2.007-.001-3.978-.52-5.748-1.503L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.336 0 9.684-4.32 9.688-9.626.002-2.57-1.002-4.986-2.825-6.809-1.824-1.824-4.244-2.827-6.818-2.829-5.342 0-9.69 4.32-9.694 9.628-.002 1.776.47 3.51 1.365 5.041L2.17 21.8l4.477-1.176z"/>
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold text-[#A69E90] tracking-wider uppercase block">WHATSAPP</span>
                        <a href="https://wa.me/919503192225" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold text-[#1C1B1A] hover:underline">+91 95031 92225</a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 text-[#ED8B36]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold text-[#A69E90] tracking-wider uppercase block">EMAIL</span>
                        <a href="mailto:kallashmalpani@wealthwisdom.com" className="text-xs sm:text-sm font-bold text-[#1C1B1A] hover:underline block leading-tight">kallashmalpani@wealthwisdom.com</a>
                        <a href="mailto:wealthwisdom86@gmail.com" className="text-xs sm:text-sm font-bold text-[#1C1B1A] hover:underline block leading-tight pt-0.5">wealthwisdom86@gmail.com</a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 text-[#ED8B36]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold text-[#A69E90] tracking-wider uppercase block">ADDRESS</span>
                        <p className="text-xs sm:text-sm font-semibold text-[#1C1B1A] leading-relaxed">
                          D-184, FREEDOM TOWERS, Behind Asian Hospital, Akashwani Square, Chhatrapati Sambhaji Nagar (Aurangabad) 431005
                        </p>
                      </div>
                    </div>

                    {/* Branch Office */}
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 text-[#ED8B36]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold text-[#A69E90] tracking-wider uppercase block">BRANCH OFFICE</span>
                        <p className="text-xs sm:text-sm font-semibold text-[#1C1B1A] leading-relaxed">
                          1st Floor, MADSM Building More Chowk, Bajaj MIDC Ctr, Sambhajinagar (Aurangabad) - 431136
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Right Card: Contact Form */}
                  <form onSubmit={handleContactSubmit} className="lg:col-span-7 bg-[#FAF7F2] border border-[#E5E2DA] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
                    <div className="text-[11px] font-bold text-[#ED8B36] tracking-wider uppercase mb-2">
                      GET EXPERT GUIDANCE FOR YOUR FINANCIAL FUTURE
                    </div>
                    
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-[#4A4740]">Your Name*</label>
                      <input 
                        type="text" 
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-[#4A4740]">Mobile Number*</label>
                      <div className="flex gap-2">
                        <div className="bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-[#4A4740] select-none shrink-0">
                          +91
                        </div>
                        <input 
                          type="tel" 
                          required
                          value={contactMobile}
                          onChange={(e) => setContactMobile(e.target.value)}
                          placeholder="Enter your mobile number"
                          className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-[#4A4740]">Email address*</label>
                      <input 
                        type="email" 
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-[#4A4740]">Message</label>
                      <textarea 
                        rows="3"
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Enter your message"
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      className="w-full bg-[#ED8B36] hover:bg-[#E56A1F] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-orange-500/10 cursor-pointer mt-2"
                    >
                      Get My Complete Retirement Roadmap &rarr;
                    </button>

                  </form>

                </div>
              </div>

            </div>
          );
        })()}

        {/* Dynamic loader screen for step 5 calculation */}
        {step === 5 && calculating && (
          <div className="py-20 flex flex-col items-center justify-center gap-6 max-w-md mx-auto text-center animate-pulse">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-orange-100 border-t-[#ED8B36] animate-spin" />
              <svg className="w-8 h-8 text-[#ED8B36] absolute" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-xl text-[#1E2B49]">Analyzing Details...</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Evaluating retirement preparedness score and calculating estimated future corpus requirements based on your lifestyle metrics.
              </p>
            </div>
          </div>
        )}

      </main>

      {/* Center Footer */}
      <footer className="bg-transparent py-10 mt-auto flex flex-col items-center">
        <div className="max-w-7xl mx-auto w-full px-4 text-center flex flex-col items-center gap-6">
          
          {/* Secure Message */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A69E90] font-semibold select-none">
            <svg className="w-4 h-4 text-[#A69E90]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Your information is always secure.</span>
          </div>

          {/* Horizontal Divider Line */}
          <div className="w-full h-[1px] bg-[#E5E2DA]" />

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm font-semibold text-[#8E8A80]">
            <a href="#careers" className="hover:text-[#ED8B36] transition-colors">Careers</a>
            <a href="#legal" className="hover:text-[#ED8B36] transition-colors">Legal</a>
            <a href="#contact" className="hover:text-[#ED8B36] transition-colors">Contact</a>
            <a href="#privacy" className="hover:text-[#ED8B36] transition-colors">Privacy Policy</a>
            <a href="#blog" className="hover:text-[#ED8B36] transition-colors">Blog</a>
            <a href="#faqs" className="hover:text-[#ED8B36] transition-colors">FAQs</a>
          </div>

          {/* Copyright */}
          <p className="text-[11px] sm:text-xs text-[#A69E90] font-medium tracking-wide mt-2">
            &copy; 2026 Wealth Wisdom
          </p>

        </div>
      </footer>

      {/* Education Planning Modal Overlay */}
      {isEducationModalOpen && (
        <div className="fixed inset-0 bg-[#1C1B1A]/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          
          {/* Modal Container */}
          <div className="bg-[#FAF8F5] border border-[#E5E2DA] w-full max-w-[500px] rounded-3xl p-6 sm:p-8 relative shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button 
              type="button"
              onClick={() => setIsEducationModalOpen(false)}
              className="absolute right-6 top-6 text-[#8E8A80] hover:text-[#1C1B1A] transition-colors cursor-pointer text-2xl font-light select-none outline-none"
            >
              &times;
            </button>

            {/* Title & Desc */}
            <div className="space-y-1.5 pt-2 text-center">
              <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#1E2B49] flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-[#ED8B36]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                </svg>
                Child Education Planning
              </h3>
              <p className="text-[#8E8A80] text-[11px] leading-relaxed max-w-sm mx-auto font-light">
                Help us understand your child's future education aspirations so we can estimate the funding required to achieve them.
              </p>
            </div>

            {/* Planning Mode Tabs */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Tab 1: College Selection */}
              <button
                type="button"
                onClick={() => setModalPlanningType('college')}
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all cursor-pointer border ${
                  modalPlanningType === 'college'
                    ? 'border-2 border-[#ED8B36] bg-[#FAF7F2] shadow-sm'
                    : 'border-[#E5E2DA] bg-white hover:bg-slate-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#ED8B36] ${modalPlanningType !== 'college' && 'opacity-60'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className={`text-[12px] font-bold mt-2 ${modalPlanningType === 'college' ? 'text-[#1E2B49]' : 'text-slate-600'}`}>
                  I Have Dream College
                </span>
                <span className="text-[9.5px] text-[#8E8A80] leading-tight font-light mt-1">
                  Select a preferred college and we'll estimate funding required.
                </span>
              </button>

              {/* Tab 2: Budget Entry */}
              <button
                type="button"
                onClick={() => setModalPlanningType('budget')}
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all cursor-pointer border ${
                  modalPlanningType === 'budget'
                    ? 'border-2 border-[#ED8B36] bg-[#FAF7F2] shadow-sm'
                    : 'border-[#E5E2DA] bg-white hover:bg-slate-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#ED8B36] ${modalPlanningType !== 'budget' && 'opacity-60'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className={`text-[12px] font-bold mt-2 ${modalPlanningType === 'budget' ? 'text-[#1E2B49]' : 'text-slate-600'}`}>
                  I Have a Budget
                </span>
                <span className="text-[9.5px] text-[#8E8A80] leading-tight font-light mt-1">
                  Enter your education budget and we'll suggest colleges within range.
                </span>
              </button>

            </div>

            {/* Modal Input fields depending on active tab */}
            <div className="space-y-4 pt-2">
              
              {modalPlanningType === 'college' ? (
                <>
                  <div className="text-[10px] font-bold text-[#ED8B36] tracking-wider uppercase mb-1">
                    SELECT YOUR COLLEGE
                  </div>
                  
                  {/* College search multi select dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-[#4A4740]">Select Your Dream Colleges</label>
                    <div className="relative">
                      <select
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val && !modalSelectedColleges.includes(val)) {
                            setModalSelectedColleges(prev => [...prev, val]);
                          }
                          e.target.value = "";
                        }}
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-semibold text-[#1C1B1A] cursor-pointer appearance-none"
                      >
                        <option value="">Select a college/university...</option>
                        <option value="BITS Pilani">BITS Pilani (₹18 Lakhs)</option>
                        <option value="IIT University">IIT University (₹12 Lakhs)</option>
                        <option value="Delhi University">Delhi University (₹3 Lakhs)</option>
                        <option value="Parul University">Parul University (₹6 Lakhs)</option>
                        <option value="MIT University">MIT University (₹45 Lakhs - US)</option>
                        <option value="Stanford University">Stanford University (₹50 Lakhs - US)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Render Selected College Chips */}
                  {modalSelectedColleges.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {modalSelectedColleges.map((col) => (
                        <div 
                          key={col} 
                          className="bg-orange-50 text-[#ED8B36] border border-orange-100 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1.5 select-none"
                        >
                          <span>{col}</span>
                          <button
                            type="button"
                            onClick={() => setModalSelectedColleges(prev => prev.filter(c => c !== col))}
                            className="hover:text-[#E56A1F] text-xs font-extrabold focus:outline-none cursor-pointer"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Include Foreign Checkbox */}
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={modalIncludeForeign}
                      onChange={(e) => setModalIncludeForeign(e.target.checked)}
                      className="rounded border-[#E5E2DA] text-[#ED8B36] focus:ring-[#ED8B36]/30 w-4 h-4 cursor-pointer"
                    />
                    <span className="text-[11px] font-bold text-[#4A4740]">Include Foreign Colleges / Universities</span>
                  </label>
                </>
              ) : (
                <>
                  <div className="text-[10px] font-bold text-[#ED8B36] tracking-wider uppercase mb-1">
                    ENTER YOUR BUDGET
                  </div>
                  
                  {/* Budget input field */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-[#4A4740]">Education Budget Amount (Today's Value)*</label>
                    <input 
                      type="number"
                      value={modalBudgetAmount}
                      onChange={(e) => setModalBudgetAmount(e.target.value)}
                      placeholder="Enter amount (e.g. 1500000)"
                      className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                    />
                  </div>
                </>
              )}

              {/* Target Year */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#4A4740]">Target Year*</label>
                <input 
                  type="number"
                  value={modalTargetYear}
                  onChange={(e) => setModalTargetYear(e.target.value)}
                  placeholder="Enter expected admission year"
                  className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                />
              </div>

            </div>

            {/* Save Button */}
            <div className="text-center pt-2">
              <button 
                type="button"
                onClick={handleSaveEducationPlan}
                className="bg-[#ED8B36] hover:bg-[#E56A1F] text-white px-10 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-orange-500/10 cursor-pointer flex items-center gap-2 mx-auto justify-center"
              >
                Save &rarr;
              </button>
            </div>

          </div>
          
        </div>
      )}

      {/* Foreign Tour Planning Modal Overlay */}
      {isTripModalOpen && (
        <div className="fixed inset-0 bg-[#1C1B1A]/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          
          {/* Modal Container */}
          <div className="bg-[#FAF8F5] border border-[#E5E2DA] w-full max-w-[500px] rounded-3xl p-6 sm:p-8 relative shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button 
              type="button"
              onClick={() => setIsTripModalOpen(false)}
              className="absolute right-6 top-6 text-[#8E8A80] hover:text-[#1C1B1A] transition-colors cursor-pointer text-2xl font-light select-none outline-none"
            >
              &times;
            </button>

            {/* Title & Desc */}
            <div className="space-y-1.5 pt-2 text-center">
              <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#1E2B49] flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-[#ED8B36]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Foreign Tour Planning
              </h3>
              <p className="text-[#8E8A80] text-[11px] leading-relaxed max-w-sm mx-auto font-light">
                Tell us how you would like to plan your future travel goals, choose dream destinations or estimate your travel budget.
              </p>
            </div>

            {/* Planning Mode Tabs */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Tab 1: Destinations */}
              <button
                type="button"
                onClick={() => setTripPlanningType('destinations')}
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all cursor-pointer border ${
                  tripPlanningType === 'destinations'
                    ? 'border-2 border-[#ED8B36] bg-[#FAF7F2] shadow-sm'
                    : 'border-[#E5E2DA] bg-white hover:bg-slate-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#ED8B36] ${tripPlanningType !== 'destinations' && 'opacity-60'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className={`text-[12px] font-bold mt-2 ${tripPlanningType === 'destinations' ? 'text-[#1E2B49]' : 'text-slate-600'}`}>
                  I Have Dream Destinations
                </span>
                <span className="text-[9.5px] text-[#8E8A80] leading-tight font-light mt-1">
                  Choose the countries or destinations you would like to visit in the future.
                </span>
              </button>

              {/* Tab 2: Budget */}
              <button
                type="button"
                onClick={() => setTripPlanningType('budget')}
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all cursor-pointer border ${
                  tripPlanningType === 'budget'
                    ? 'border-2 border-[#ED8B36] bg-[#FAF7F2] shadow-sm'
                    : 'border-[#E5E2DA] bg-white hover:bg-slate-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#ED8B36] ${tripPlanningType !== 'budget' && 'opacity-60'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className={`text-[12px] font-bold mt-2 ${tripPlanningType === 'budget' ? 'text-[#1E2B49]' : 'text-slate-600'}`}>
                  I Have a Budget
                </span>
                <span className="text-[9.5px] text-[#8E8A80] leading-tight font-light mt-1">
                  Enter your expected travel budget and discover suitable destinations.
                </span>
              </button>

            </div>

            {/* Modal Input fields depending on active tab */}
            <div className="space-y-4 pt-2">
              
              {tripPlanningType === 'destinations' ? (
                <>
                  <div className="text-[10px] font-bold text-[#ED8B36] tracking-wider uppercase mb-1">
                    SELECT DESTINATIONS
                  </div>
                  
                  {/* Destination dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-[#4A4740]">Select Your Dream Destinations</label>
                    <div className="relative">
                      <select
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val && !tripSelectedDestinations.includes(val)) {
                            setTripSelectedDestinations(prev => [...prev, val]);
                          }
                          e.target.value = "";
                        }}
                        className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-10 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-semibold text-[#1C1B1A] cursor-pointer appearance-none"
                      >
                        <option value="">Search countries or destinations...</option>
                        <option value="USA">USA (₹3.0 Lakhs / person)</option>
                        <option value="UK">UK (₹2.5 Lakhs / person)</option>
                        <option value="Switzerland">Switzerland (₹3.0 Lakhs / person)</option>
                        <option value="France">France (₹2.2 Lakhs / person)</option>
                        <option value="Italy">Italy (₹2.2 Lakhs / person)</option>
                        <option value="Japan">Japan (₹2.0 Lakhs / person)</option>
                        <option value="Russia">Russia (₹1.8 Lakhs / person)</option>
                        <option value="Singapore">Singapore (₹1.2 Lakhs / person)</option>
                        <option value="Maldives">Maldives (₹1.5 Lakhs / person)</option>
                        <option value="Bali">Bali (₹1.0 Lakhs / person)</option>
                        <option value="Dubai">Dubai (₹1.2 Lakhs / person)</option>
                        <option value="Thailand">Thailand (₹80k / person)</option>
                        <option value="Bhutan">Bhutan (₹60k / person)</option>
                        <option value="China">China (₹90k / person)</option>
                      </select>
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Selected Chips */}
                  {tripSelectedDestinations.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {tripSelectedDestinations.map((dest) => (
                        <div 
                          key={dest} 
                          className="bg-orange-50 text-[#ED8B36] border border-orange-100 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1.5 select-none"
                        >
                          <span>{dest}</span>
                          <button
                            type="button"
                            onClick={() => setTripSelectedDestinations(prev => prev.filter(c => c !== dest))}
                            className="hover:text-[#E56A1F] text-xs font-extrabold focus:outline-none cursor-pointer"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Target Year */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-[#4A4740]">Target Travel Year*</label>
                    <input 
                      type="number"
                      value={tripTargetYear}
                      onChange={(e) => setTripTargetYear(e.target.value)}
                      placeholder="Enter expected travel year"
                      className="w-full bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[10px] font-bold text-[#ED8B36] tracking-wider uppercase mb-1">
                    BUDGET PLANNING
                  </div>
                  
                  {/* Budget input field */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold text-[#4A4740]">Estimated Travel Budget Per Person*</label>
                    <div className="flex gap-2">
                      <input 
                        type="number"
                        value={tripBudgetPerPerson}
                        onChange={(e) => setTripBudgetPerPerson(e.target.value)}
                        placeholder="Enter your travel budget per person"
                        className="flex-1 bg-[#FAF7F2] border border-[#E5E2DA] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ED8B36]/20 focus:border-[#ED8B36] font-medium text-slate-800 placeholder:text-[#A69E90]"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (tripBudgetPerPerson) {
                            alert(`Travel budget per person added: ₹${parseFloat(tripBudgetPerPerson).toLocaleString('en-IN')}`);
                          }
                        }}
                        className="bg-[#ED8B36] hover:bg-[#E56A1F] text-white px-5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0"
                      >
                        + Add
                      </button>
                    </div>
                  </div>

                  {/* Clickable Destination Chips */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-[11px] font-bold text-[#4A4740]">Select Destinations You'd Like to Visit</label>
                    <div className="flex flex-wrap gap-2">
                      {['Japan', 'China', 'Bhutan', 'Russia'].map((dest) => {
                        const isSelected = tripSelectedDestinations.includes(dest);
                        return (
                          <button
                            key={dest}
                            type="button"
                            onClick={() => {
                              if (isSelected) {
                                setTripSelectedDestinations(prev => prev.filter(c => c !== dest));
                              } else {
                                setTripSelectedDestinations(prev => [...prev, dest]);
                              }
                            }}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                              isSelected
                                ? 'border-[#ED8B36] bg-[#FFF6ED] text-[#ED8B36] shadow-xs'
                                : 'border-[#E5E2DA] bg-[#FAF7F2] text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            {dest}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

            </div>

            {/* Save Button */}
            <div className="text-center pt-2">
              <button 
                type="button"
                onClick={handleSaveTripPlan}
                className="bg-[#ED8B36] hover:bg-[#E56A1F] text-white px-10 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-orange-500/10 cursor-pointer flex items-center gap-2 mx-auto justify-center"
              >
                Save &rarr;
              </button>
            </div>

          </div>
          
        </div>
      )}

    </div>
  );
}
