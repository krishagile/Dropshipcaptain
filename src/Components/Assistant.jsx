// import React, { useState } from "react";
// import "./Assistant.css";
// import openIcon from '../assets/assistant.png';
// import logo from '../assets/dc-rounded.png';

// const Assistant = () => {
//   // const [isOpen, setIsOpen] = useState(false);
//   // const [expandedFaq, setExpandedFaq] = useState(null);

//   // const faqs = [
//   //   {
//   //     id: 1,
//   //     question: "Processing Times When Dropshipping From China",
//   //     answer: "When dropshipping from China, processing times typically range from 2-7 business days. This includes the time needed to source the product, quality check, and prepare it for shipment. Factors affecting processing time include product availability, customization requirements, and order volume during peak seasons."
//   //   },
//   //   {
//   //     id: 2,
//   //     question: "Average Shipping Times Per Country",
//   //     answer: "Shipping times vary by destination: USA (10-20 days), Canada (12-25 days), UK (10-20 days), Australia (15-30 days), European countries (12-25 days). Express shipping options can reduce these times by 50-70%. These are estimates and actual delivery may vary based on customs clearance and local postal services."
//   //   },
//   //   {
//   //     id: 3,
//   //     question: "How Do I Deactivate My Account?",
//   //     answer: "To deactivate your account: 1) Log into your account, 2) Navigate to Settings, 3) Click on Account Settings, 4) Scroll to the bottom and click 'Deactivate Account', 5) Follow the confirmation prompts. Note: Deactivation is permanent and you'll lose access to all data. Make sure to fulfill any pending orders before deactivation."
//   //   },
//   //   {
//   //     id: 4,
//   //     question: "Refund, Replacement, and Return Policy",
//   //     answer: "Our policy covers: Refunds - Available within 30 days for defective or incorrect items. Replacements - Free replacements for damaged items with photo proof within 14 days. Returns - Customer must cover return shipping unless item is defective. Process time: 5-10 business days after receiving returned item. Contact support with your order number to initiate any of these processes."
//   //   }
//   // ];

//   // const toggleModal = () => {
//   //   setIsOpen(!isOpen);
//   //   if (!isOpen) {
//   //     setExpandedFaq(null);
//   //   }
//   // };

//   // const toggleFaq = (faqId) => {
//   //   setExpandedFaq(expandedFaq === faqId ? null : faqId);
//   // };

//   return (
//     <>
//       {/* Launcher Button */}
// <div
//   className={`relative intercom-launcher ${isOpen ? 'launcher-open' : ''}`}
//   role="button"
//   aria-label="Open Messenger"
//   tabIndex={0}
//   // onClick={toggleModal}
// >
//   {/* Ping effect */}
//   {!isOpen && (
//     <span className="absolute -top-2 -left-1 h-8 w-8 bg-warning-500 rounded-full opacity-75 animate-ping"></span>
//   )}

//   {/* Open icon */}
//   <div className={`intercom-open-icon ${isOpen ? 'hidden' : ''}`}>
//     <img
//       src={openIcon}
//       alt="Open assistant"
//       className="intercom-icon-img relative z-10"
//     />
//   </div>

//   {/* Close icon */}
//   <div className={`intercom-close-icon ${isOpen ? 'visible' : ''}`}>
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="relative z-10"
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
//         fill="currentColor"
//       />
//     </svg>
//   </div>
// </div>


//       {/* Modal */}
//       {isOpen && (
//         <div className="assistant-modal">
//           <div className="modal-content">
//             {/* Header */}
//             <div className="modal-header">
//               <button 
//                 className="close-button"
//                 onClick={toggleModal}
//                 aria-label="Close"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M13.25 3.95L12.05 2.75L8 6.8L3.95 2.75L2.75 3.95L6.8 8L2.75 12.05L3.95 13.25L8 9.2L12.05 13.25L13.25 12.05L9.2 8L13.25 3.95Z" fill="currentColor"/>
//                 </svg>
//               </button>

//               <div className="header-content">
//                 <div className="header-brand">
//                   <div className="brand-logo">
//                     <img src={logo} alt="Dropship logo" />
//                   </div>
//                 </div>
//                 <div className="header-text">
//                   <h1>Hi, there! 👋</h1>
//                   <h2>How can we help?</h2>
//                 </div>
//               </div>
//             </div>

//             {/* Body */}
//             <div className="modal-body">
//               <div className="search-section">
//                 <div className="search-input-wrapper">
//                   <input 
//                     type="text" 
//                     placeholder="Search for help"
//                     className="search-input"
//                   />
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
//                     <circle cx="7.5" cy="7.5" r="4.625" stroke="currentColor" strokeWidth="1.75"/>
//                     <path d="M13.3813 14.6187C13.723 14.9604 14.277 14.9604 14.6187 14.6187C14.9604 14.277 14.9604 13.723 14.6187 13.3813L13.3813 14.6187ZM10.3813 11.6187L13.3813 14.6187L14.6187 13.3813L11.6187 10.3813L10.3813 11.6187Z" fill="currentColor"/>
//                   </svg>
//                 </div>

//                 {/* FAQs List */}
//                 {/* <div className="faqs-list">
//                   {faqs.map((faq) => (
//                     <div 
//                       key={faq.id} 
//                       className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
//                     >
//                       <button 
//                         className="faq-question"
//                         onClick={() => toggleFaq(faq.id)}
//                       >
//                         <span>{faq.question}</span>
//                         <svg 
//                           xmlns="http://www.w3.org/2000/svg" 
//                           width="16" 
//                           height="16" 
//                           viewBox="0 0 16 16" 
//                           fill="none"
//                           className="faq-arrow"
//                         >
//                           <path d="M5.42773 4.70898C5.46387 4.85254 5.53809 4.98828 5.65039 5.10059L8.54932 8L5.64893 10.9004C5.31689 11.2324 5.31689 11.7705 5.64893 12.1025C5.98096 12.4336 6.51904 12.4336 6.85107 12.1025L10.3516 8.60059C10.5591 8.39355 10.6367 8.10449 10.585 7.83691C10.5537 7.67578 10.4761 7.52246 10.3516 7.39844L6.85254 3.89941C6.52051 3.56738 5.98242 3.56738 5.65039 3.89941C5.43066 4.11816 5.35645 4.42871 5.42773 4.70898Z" fill="currentColor"/>
//                         </svg>
//                       </button>
                      
//                       {expandedFaq === faq.id && (
//                         <div className="faq-answer">
//                           <p>{faq.answer}</p>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div> */}
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="modal-footer">
//               <button className="footer-tab active">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                   <path fill="currentColor" fillRule="evenodd" d="M10.5 2.335 3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 0 0-3 0M7.316 14.366a.85.85 0 1 0-1.132 1.268A8.7 8.7 0 0 0 12 17.852a8.7 8.7 0 0 0 5.816-2.218.85.85 0 1 0-1.132-1.268A7 7 0 0 1 12 16.152c-1.8 0-3.44-.675-4.684-1.786" clipRule="evenodd"/>
//                 </svg>
//                 <span>Home</span>
//               </button>
//               <button className="footer-tab">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                   <path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v15.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z"/>
//                   <path fill="currentColor" fillRule="evenodd" d="M17 7a.85.85 0 0 1 0 1.7H7A.85.85 0 1 1 7 7zm-5 4a.85.85 0 0 1 0 1.7H7A.85.85 0 0 1 7 11z" clipRule="evenodd"/>
//                 </svg>
//                 <span>Messages</span>
//               </button>
//               <button className="footer-tab">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                   <circle cx="12" cy="12" r="9.65" stroke="currentColor" strokeWidth="1.7"/>
//                   <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" d="M9.664 8.576a2.41 2.41 0 1 1 4.102 2.39l-1.075 1.104c-.326.322-.765.76-.765 1.544v.364"/>
//                   <circle cx="11.927" cy="16.884" r="0.884" fill="currentColor"/>
//                 </svg>
//                 <span>Help</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Assistant;