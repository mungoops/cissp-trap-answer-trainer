const QUESTION_BANK = [
  {
    id: 1,
    domain: "Domain 1 · Security and Risk Management",
    trap: "Fix fast vs govern first",
    difficulty: "Medium",
    stem: "A business unit wants to launch a customer portal in two weeks. The security team discovers there is no approved data classification for the customer data involved. What should the security manager do FIRST?",
    options: [
      "Deploy DLP monitoring to catch misuse after launch.",
      "Define data ownership and classification requirements before selecting controls.",
      "Require the portal team to sign an exception acknowledging the risk.",
      "Add a web application firewall and proceed with the planned release."
    ],
    answer: 1,
    rationale: "Classification and ownership determine which controls are appropriate. Without that governance step, any control choice is premature.",
    trapRationale: "The tempting answer is to add a visible control quickly, but CISSP logic starts with understanding the asset and risk context before control selection.",
    principle: "Classify first, then control."
  },
  {
    id: 2,
    domain: "Domain 1 · Security and Risk Management",
    trap: "Strongest control vs right-sized control",
    difficulty: "Medium",
    stem: "A department asks for biometric authentication for an internal low-risk knowledge base because 'more security is always better.' What is the BEST response?",
    options: [
      "Approve it because biometrics reduce password risk.",
      "Deny it because biometrics should never be used internally.",
      "Select controls based on risk, usability, and business need rather than maximum strength alone.",
      "Add biometrics only for system administrators and ignore other users."
    ],
    answer: 2,
    rationale: "CISSP judgment favors appropriate, risk-based controls over maximal controls. Security must be proportional.",
    trapRationale: "The attractive wrong answer is 'use the strongest thing available.' The exam usually rewards fit-for-purpose governance, not control maximalism.",
    principle: "Right-sized control beats strongest control."
  },
  {
    id: 3,
    domain: "Domain 7 · Security Operations",
    trap: "Analyze now vs preserve evidence first",
    difficulty: "Hard",
    stem: "A suspected insider copied sensitive files from a workstation that is still powered on. Investigators want to begin searching the drive immediately. What should happen FIRST?",
    options: [
      "Capture and preserve relevant evidence using approved forensic procedures.",
      "Run antivirus tools to determine whether malware was involved.",
      "Interview the employee before any technical action is taken.",
      "Reboot the workstation into a forensic environment."
    ],
    answer: 0,
    rationale: "Before analysis, evidence integrity must be preserved. That includes proper forensic handling and chain of custody.",
    trapRationale: "The wrong answer feels productive because analysis seems urgent. CISSP reasoning puts evidentiary integrity ahead of curiosity.",
    principle: "Preserve evidence before deep analysis."
  },
  {
    id: 4,
    domain: "Domain 5 · Identity and Access Management",
    trap: "Operational convenience vs least privilege",
    difficulty: "Medium",
    stem: "A regional office wants all help desk staff added to a privileged admin group so ticket resolution is faster after hours. What is the BEST control decision?",
    options: [
      "Approve the request and monitor the group monthly.",
      "Use role-based access with just-in-time elevation for specific tasks.",
      "Create a shared admin account so after-hours access is easier to manage.",
      "Require supervisors to email approvals after each use."
    ],
    answer: 1,
    rationale: "JIT elevation and role-based access preserve least privilege while meeting operational needs.",
    trapRationale: "The attractive wrong answer removes friction quickly, but CISSP favors reducing standing privilege rather than normalizing it.",
    principle: "Reduce standing privilege."
  },
  {
    id: 5,
    domain: "Domain 1 · Security and Risk Management",
    trap: "Technical fix vs business ownership",
    difficulty: "Medium",
    stem: "A vendor stores regulated customer data in a country with new transfer restrictions. The technical team proposes additional encryption as the solution. What should the security leader do FIRST?",
    options: [
      "Increase key length and keep the architecture unchanged.",
      "Determine legal, contractual, and jurisdictional requirements with the appropriate stakeholders.",
      "Move the encryption keys to a different cloud region.",
      "Delay action until a regulator issues a formal penalty."
    ],
    answer: 1,
    rationale: "Cross-border data handling is fundamentally a governance, legal, and contractual issue before it is a technical one.",
    trapRationale: "Encryption is useful, but it does not answer whether the transfer itself is permitted. The exam rewards the ownership layer first.",
    principle: "Resolve legal and business constraints before tuning technical controls."
  },
  {
    id: 6,
    domain: "Domain 8 · Software Development Security",
    trap: "Deadline pressure vs secure process",
    difficulty: "Medium",
    stem: "Developers want to hardcode API secrets temporarily so a release can meet a client deadline. What is the BEST management response?",
    options: [
      "Allow it if the code is removed in the next sprint.",
      "Allow it only in lower environments.",
      "Require use of an approved secret-management method and treat the issue as an SDLC control requirement.",
      "Let the project manager decide whether the risk is acceptable."
    ],
    answer: 2,
    rationale: "The right move is to enforce secure development controls, not rely on temporary exceptions that predictably become permanent.",
    trapRationale: "The trap is the 'just for now' exception. CISSP logic assumes weak temporary practices tend to persist and widen exposure.",
    principle: "Do not normalize insecure shortcuts."
  },
  {
    id: 7,
    domain: "Domain 7 · Security Operations",
    trap: "Restore speed vs evidence and containment",
    difficulty: "Hard",
    stem: "Ransomware is spreading through a file-sharing platform. Operations wants to restore from backup immediately to minimize downtime. What should happen FIRST?",
    options: [
      "Restore the most critical servers and investigate later.",
      "Contain the incident to stop further spread and preserve evidence for response activities.",
      "Pay the ransom if the data is business-critical.",
      "Wipe all infected devices before identifying the attack path."
    ],
    answer: 1,
    rationale: "Containment comes before broad restoration. Restoring too early can reintroduce the threat or destroy useful evidence.",
    trapRationale: "Business pressure makes restore-first feel responsible, but the better answer reduces blast radius before recovery begins.",
    principle: "Contain first, then recover."
  },
  {
    id: 8,
    domain: "Domain 1 · Security and Risk Management",
    trap: "Awareness vs enforceable policy",
    difficulty: "Easy",
    stem: "Employees keep using unsanctioned file-sharing tools despite annual awareness training. What is the MOST effective next step?",
    options: [
      "Send another awareness email with stronger language.",
      "Block the tools without updating policy.",
      "Define and enforce acceptable-use requirements supported by approved alternatives and monitoring.",
      "Discipline the next employee who is caught."
    ],
    answer: 2,
    rationale: "Training alone is weak without clear, enforceable policy and viable business alternatives.",
    trapRationale: "Awareness looks proactive, but recurring behavior usually means governance and operating controls are missing or misaligned.",
    principle: "Train people, but also govern behavior."
  },
  {
    id: 9,
    domain: "Domain 5 · Identity and Access Management",
    trap: "Access fast vs verify joiner process",
    difficulty: "Medium",
    stem: "New hires often start without system access, so managers ask HR to preload broad access profiles before employment records are finalized. What is the BEST response?",
    options: [
      "Approve it for departments with high turnover.",
      "Use pre-provisioning only after an authoritative source event and role mapping are confirmed.",
      "Give all new hires a baseline access package on day one.",
      "Let local IT teams provision access manually before HR processing is complete."
    ],
    answer: 1,
    rationale: "Identity lifecycle actions should be triggered by authoritative sources and mapped roles, not informal convenience steps.",
    trapRationale: "The tempting answer fixes onboarding pain quickly, but it breaks the integrity of the joiner process and increases excess access.",
    principle: "Authoritative identity events should drive provisioning."
  },
  {
    id: 10,
    domain: "Domain 3 · Security Architecture and Engineering",
    trap: "Redundancy assumption vs true resilience",
    difficulty: "Medium",
    stem: "A service owner says the application is resilient because it runs in two availability zones. What should the security architect evaluate NEXT?",
    options: [
      "Whether the zones use the same hypervisor.",
      "Whether supporting dependencies, recovery procedures, and failover testing also support the availability objective.",
      "Whether the zones are on separate continents.",
      "Whether the application team has cyber insurance."
    ],
    answer: 1,
    rationale: "Resilience is broader than deploying to multiple zones. Shared dependencies and untested failover can still create a single point of failure.",
    trapRationale: "The attractive wrong answer focuses on one technical detail. CISSP thinking checks the whole recovery design and operating reality.",
    principle: "Availability depends on the full chain, not one architectural feature."
  },
  {
    id: 11,
    domain: "Domain 1 · Security and Risk Management",
    trap: "Ownership confusion vs accountability",
    difficulty: "Easy",
    stem: "Several teams use the same critical database, but no one agrees who should approve access exceptions. What should be established FIRST?",
    options: [
      "A quarterly review meeting for all requestors.",
      "A data owner accountable for access decisions.",
      "An automated access request workflow.",
      "A shared mailbox for exception approvals."
    ],
    answer: 1,
    rationale: "Technology and process follow accountability. Without an owner, the approval mechanism is structurally weak.",
    trapRationale: "Workflow automation sounds mature, but it only scales confusion if ownership is undefined.",
    principle: "Establish accountability before automation."
  },
  {
    id: 12,
    domain: "Domain 6 · Security Assessment and Testing",
    trap: "More findings vs better coverage",
    difficulty: "Medium",
    stem: "Executives ask why quarterly vulnerability scans did not reveal a privilege escalation issue later found in production. What is the BEST explanation to assess FIRST?",
    options: [
      "The scanners were not licensed for enough IP addresses.",
      "The test strategy may not have covered the relevant attack path or operating conditions.",
      "The operations team probably ignored a scanner alert.",
      "The issue was impossible to discover before exploitation."
    ],
    answer: 1,
    rationale: "Assessment quality depends on scope, method, and realism. A missed issue often points to test coverage limits rather than a generic tooling failure.",
    trapRationale: "The trap is blaming the tool itself. CISSP answers often focus on control design and coverage before product blame.",
    principle: "Test effectiveness is about scope and method, not just running tools."
  },
  {
    id: 13,
    domain: "Domain 8 · Software Development Security",
    trap: "Patch later vs design now",
    difficulty: "Medium",
    stem: "A team building a mobile app says input validation can be handled after launch because the backend is protected by a WAF. What is the BEST response?",
    options: [
      "Accept the risk because the WAF reduces exploit likelihood.",
      "Require secure coding controls in the application itself because perimeter controls are not a substitute for proper design.",
      "Delay the release until a third-party code review is complete for every module.",
      "Move all validation to the API gateway and remove it from the application backlog."
    ],
    answer: 1,
    rationale: "Defense in depth means application-layer controls still matter. Secure coding is not optional because a perimeter control exists.",
    trapRationale: "The trap is outsourcing software security to an external control. CISSP usually prefers fixing risk at the appropriate layer.",
    principle: "Perimeter controls do not replace secure design."
  },
  {
    id: 14,
    domain: "Domain 7 · Security Operations",
    trap: "Jump to remediation vs understand scope",
    difficulty: "Medium",
    stem: "A cloud workload shows signs of credential misuse. The incident commander wants to rotate the exposed key immediately. What should also be prioritized at the same time?",
    options: [
      "Public disclosure to affected customers.",
      "Determining the scope, timeline, and impacted resources relevant to containment.",
      "Deleting all related logs so attackers cannot use them.",
      "Restoring the workload from a clean image."
    ],
    answer: 1,
    rationale: "Containment actions should be informed by scoping. Response is not just doing something fast; it is acting without losing sight of impact and spread.",
    trapRationale: "Immediate key rotation feels decisive, but without scope awareness the team may miss additional abuse paths or related assets.",
    principle: "Act quickly, but with scope awareness."
  },
  {
    id: 15,
    domain: "Domain 5 · Identity and Access Management",
    trap: "Shared admin vs accountability",
    difficulty: "Easy",
    stem: "A legacy platform cannot support named administrator accounts, so operations proposes one shared privileged account with a long password kept in a safe. What is the BEST compensating control?",
    options: [
      "Require a second person to witness every use of the account.",
      "Use check-out controls with individual accountability and session logging around the shared credential.",
      "Change the password only when an administrator leaves.",
      "Limit the account to business hours."
    ],
    answer: 1,
    rationale: "When shared credentials are unavoidable, the compensating control should restore accountability as much as possible.",
    trapRationale: "A long password in a safe sounds secure, but it does not solve attribution. CISSP cares deeply about accountability.",
    principle: "If you cannot eliminate shared privilege, wrap it with accountability."
  },
  {
    id: 16,
    domain: "Domain 1 · Security and Risk Management",
    trap: "Risk register theater vs treatment decision",
    difficulty: "Medium",
    stem: "An auditor notes that the organization tracks risks diligently but repeatedly accepts the same unsupported legacy-system risks year after year. What is the MOST important improvement?",
    options: [
      "Increase the length of risk descriptions in the register.",
      "Require clearer treatment decisions, owners, and review triggers for accepted risks.",
      "Move the risk register into a better GRC tool.",
      "Stop accepting risks for legacy systems entirely."
    ],
    answer: 1,
    rationale: "A mature risk program is about accountable treatment and review, not simply recording risks.",
    trapRationale: "The trap is confusing documentation with management. CISSP favors decision quality and ownership over process theater.",
    principle: "Risk management requires accountable treatment, not just logging."
  },
  {
    id: 17,
    domain: "Domain 2 · Asset Security",
    trap: "Encrypt everything vs handle lifecycle correctly",
    difficulty: "Medium",
    stem: "A company is decommissioning laptops used by executives. The devices are encrypted. What is the BEST next step before disposal?",
    options: [
      "Dispose of them immediately because encryption already protects the data.",
      "Ensure media sanitization or destruction follows the asset-handling requirement for the data involved.",
      "Remove the batteries and send the laptops to resale.",
      "Reimage the laptops and return them to inventory without further action."
    ],
    answer: 1,
    rationale: "Encryption helps, but disposal should still follow formal sanitization and lifecycle requirements.",
    trapRationale: "The wrong answer assumes one control removes all lifecycle obligations. CISSP expects complete asset handling.",
    principle: "Controls do not replace lifecycle discipline."
  },
  {
    id: 18,
    domain: "Domain 4 · Communication and Network Security",
    trap: "Segmented equals secure",
    difficulty: "Medium",
    stem: "A payment system is moved to a segmented network zone. Leadership asks what matters MOST next. What is the BEST answer?",
    options: [
      "Verify that access paths, allowed protocols, and administrative routes enforce the segmentation objective.",
      "Assume the new VLAN provides sufficient isolation.",
      "Replace all firewalls in adjacent zones.",
      "Add more intrusion detection sensors than the previous environment had."
    ],
    answer: 0,
    rationale: "Segmentation is only meaningful if the permitted flows and management paths are tightly controlled and validated.",
    trapRationale: "The trap is treating segmentation as a label instead of a tested enforcement boundary.",
    principle: "A boundary is only as good as its allowed paths."
  },
  {
    id: 19,
    domain: "Domain 6 · Security Assessment and Testing",
    trap: "Compliance pass vs operating effectiveness",
    difficulty: "Medium",
    stem: "A team says access reviews are effective because all quarterly review forms were signed on time. What should the assessor determine NEXT?",
    options: [
      "Whether the signatures were electronic or handwritten.",
      "Whether the reviews actually identified and removed inappropriate access.",
      "Whether the forms were stored in the correct repository.",
      "Whether managers like the current review cadence."
    ],
    answer: 1,
    rationale: "Evidence of execution is not evidence of effectiveness. The real test is whether the control changed access risk.",
    trapRationale: "The attractive wrong answer confuses procedural completion with security outcome.",
    principle: "Prove effectiveness, not just activity."
  },
  {
    id: 20,
    domain: "Domain 7 · Security Operations",
    trap: "Root cause later vs safe restoration",
    difficulty: "Hard",
    stem: "A database outage was caused by malicious script execution through an admin account. Backups are healthy. Before restoring service, what is MOST important?",
    options: [
      "Confirm the compromise path has been contained so recovery does not reintroduce the issue.",
      "Restore from the newest backup to reduce data loss.",
      "Ask the vendor whether they have seen this attack before.",
      "Rotate all employee passwords across the company."
    ],
    answer: 0,
    rationale: "Recovery should not begin until the path to compromise is controlled sufficiently to avoid repeated failure.",
    trapRationale: "The wrong answer focuses on speed of restoration rather than safety of restoration.",
    principle: "Safe recovery beats fast recovery."
  },
  {
    id: 21,
    domain: "Domain 3 · Security Architecture and Engineering",
    trap: "Single control trust vs layered design",
    difficulty: "Medium",
    stem: "An engineer argues that full-disk encryption alone is enough to protect laptops containing sensitive data. Which concern is MOST important?",
    options: [
      "Encrypted laptops are heavier to transport.",
      "Protection of data in use, authentication, and device management still matter beyond data at rest.",
      "Full-disk encryption slows every application equally.",
      "Encryption removes the need for user awareness training."
    ],
    answer: 1,
    rationale: "Disk encryption protects data at rest, not every exposure state. Security architecture must cover access, use, and lifecycle.",
    trapRationale: "The trap is mistaking a strong control for complete coverage.",
    principle: "Map controls to the state of the data."
  },
  {
    id: 22,
    domain: "Domain 1 · Security and Risk Management",
    trap: "Vendor promise vs due diligence",
    difficulty: "Easy",
    stem: "A SaaS provider claims it is 'secure by design' and asks to skip the normal security review to meet procurement timing. What should the information security manager do?",
    options: [
      "Accept the statement if the vendor serves large enterprises.",
      "Reduce the review to a questionnaire only.",
      "Apply the organization's third-party risk process before making a trust decision.",
      "Approve the contract and add a stronger right-to-audit clause later."
    ],
    answer: 2,
    rationale: "Third-party trust should come from the organization's due-diligence process, not vendor marketing language.",
    trapRationale: "The vendor's confidence can feel reassuring, but CISSP answers favor formal assurance over claims.",
    principle: "Trust process, not marketing."
  },
  {
    id: 23,
    domain: "Domain 5 · Identity and Access Management",
    trap: "Authentication strength vs authorization hygiene",
    difficulty: "Medium",
    stem: "A company improved MFA coverage, but auditors still found excessive access across shared drives. What should be prioritized NEXT?",
    options: [
      "Upgrade from OTP to phishing-resistant MFA for all users.",
      "Review authorization models, group nesting, and stale entitlements.",
      "Rotate passwords more frequently.",
      "Require users to attest monthly that they understand access rules."
    ],
    answer: 1,
    rationale: "MFA improves identity assurance at login, but it does not fix entitlement sprawl or poor authorization design.",
    trapRationale: "The attractive wrong answer keeps improving the visible security control even though the finding is about access scope.",
    principle: "Authentication and authorization are different problems."
  },
  {
    id: 24,
    domain: "Domain 8 · Software Development Security",
    trap: "Testing at the end vs secure pipeline",
    difficulty: "Medium",
    stem: "A development manager wants one large security test phase just before release because embedding checks into CI/CD 'slows teams down.' What is the BEST response?",
    options: [
      "Agree, because consolidating security testing reduces operational noise.",
      "Embed appropriate security checks earlier in the pipeline so defects are found when they are cheaper to fix.",
      "Skip automated tests and rely on annual penetration tests.",
      "Require security architects to manually approve every code commit."
    ],
    answer: 1,
    rationale: "Shift-left controls improve efficiency and reduce late-stage rework. Centralized end testing alone is slower and less effective.",
    trapRationale: "The trap promises speed by postponing pain. CISSP logic prefers earlier control integration.",
    principle: "Find issues when they are cheapest to fix."
  },
  {
    id: 25,
    domain: "Domain 2 · Asset Security",
    trap: "Backups exist vs data is recoverable",
    difficulty: "Medium",
    stem: "A records team says archival data is protected because it is backed up weekly. Which question matters MOST?",
    options: [
      "How many employees know the backup window.",
      "Whether retention, restoration, and integrity needs for the records are actually being met.",
      "Whether the backups use incremental compression.",
      "Whether backup administrators are in the same department."
    ],
    answer: 1,
    rationale: "Backup frequency alone does not prove the records meet business, legal, and recovery requirements.",
    trapRationale: "The wrong answer mistakes presence of backups for adequacy of protection.",
    principle: "A backup is only useful if it meets recovery and retention needs."
  },
  {
    id: 26,
    domain: "Domain 7 · Security Operations",
    trap: "Full shutdown vs business continuity judgment",
    difficulty: "Hard",
    stem: "Malware is found on several user workstations in a hospital, but clinical systems remain unaffected. What is the BEST immediate management decision?",
    options: [
      "Shut down the entire network to prove decisive action.",
      "Isolate affected segments and systems while preserving essential clinical operations.",
      "Wait for a complete root cause report before taking action.",
      "Reimage every workstation in the hospital at once."
    ],
    answer: 1,
    rationale: "Response should reduce risk while preserving mission-critical operations. Blanket shutdown may create greater harm.",
    trapRationale: "The attractive wrong answer is dramatic and seems tough, but CISSP favors controlled containment tied to business impact.",
    principle: "Protect the mission while containing the incident."
  },
  {
    id: 27,
    domain: "Domain 6 · Security Assessment and Testing",
    trap: "Scan clean vs design assurance",
    difficulty: "Medium",
    stem: "A web application passed the latest vulnerability scan, so the product owner says penetration testing is unnecessary. What is the BEST response?",
    options: [
      "Agree because scans and penetration tests produce the same assurance.",
      "Use penetration testing when you need to evaluate exploitable attack paths and chained weaknesses beyond scan findings.",
      "Skip pen testing unless there was a recent incident.",
      "Replace future scans with annual penetration testing only."
    ],
    answer: 1,
    rationale: "Different assessment methods answer different questions. Pen testing can reveal realistic exploitation paths that scans miss.",
    trapRationale: "The trap is assuming one assessment method makes the others redundant.",
    principle: "Choose the assessment method that fits the assurance question."
  },
  {
    id: 28,
    domain: "Domain 1 · Security and Risk Management",
    trap: "Security owns everything vs business ownership",
    difficulty: "Easy",
    stem: "A line-of-business executive asks security to approve a risky but revenue-critical product decision on the business's behalf. What is the BEST answer?",
    options: [
      "Security should approve it because security understands risk best.",
      "Security should recommend risk information and control options, but the business owner should make the risk decision.",
      "The legal department should make the decision instead.",
      "The project manager should decide because delivery timing is involved."
    ],
    answer: 1,
    rationale: "Security informs and advises, but risk acceptance belongs with the appropriate business owner.",
    trapRationale: "It feels efficient for security to decide, but CISSP distinguishes advisory authority from business accountability.",
    principle: "Risk ownership belongs with the business."
  },
  {
    id: 29,
    domain: "Domain 5 · Identity and Access Management",
    trap: "Faster deprovisioning by email vs source-driven control",
    difficulty: "Medium",
    stem: "Managers often forget to notify IT when contractors leave, so dormant accounts remain active. What is the BEST long-term fix?",
    options: [
      "Send weekly reminder emails to all managers.",
      "Disable contractor accounts every Friday unless manually renewed.",
      "Tie account lifecycle actions to authoritative contract end dates and periodic access reviews.",
      "Ask the help desk to check inactive accounts once a quarter."
    ],
    answer: 2,
    rationale: "Sustainable deprovisioning depends on authoritative lifecycle data and systematic review, not repeated reminders.",
    trapRationale: "The attractive wrong answer uses more communication to compensate for a broken control design.",
    principle: "Fix the source process, not just the symptom."
  },
  {
    id: 30,
    domain: "Domain 3 · Security Architecture and Engineering",
    trap: "Confidentiality focus vs balanced triad",
    difficulty: "Medium",
    stem: "A security architect recommends an aggressive encryption redesign for a safety-critical manufacturing system. Operations objects that downtime risk would increase. What should guide the decision MOST?",
    options: [
      "Choose the design that maximizes confidentiality regardless of availability impact.",
      "Balance confidentiality, integrity, and availability according to the system's mission and safety requirements.",
      "Defer to the encryption vendor's reference architecture.",
      "Prioritize integrity alone because safety systems value correctness over secrecy."
    ],
    answer: 1,
    rationale: "Security architecture should reflect mission priorities and the full CIA trade space, especially in operational or safety-critical environments.",
    trapRationale: "The trap is treating one pillar as universally dominant. CISSP expects context-driven balancing.",
    principle: "Security objectives are mission-dependent."
  }
];
