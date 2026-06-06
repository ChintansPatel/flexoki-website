export default function Resume() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-10">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-fx-black">Chintan Patel</h1>
          <nav className="flex justify-center space-x-6 text-fx-red">
            <a href="/" className="hover:text-fx-orange transition-colors">About</a>
            <a href="/writing" className="hover:text-fx-orange transition-colors">Writing</a>
            <a href="/bookshelf" className="hover:text-fx-orange transition-colors">Bookshelf</a>
          </nav>
        </header>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-fx-black border-b border-fx-200 pb-2">Education</h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-fx-black">The University of Chicago Booth School of Business</p>
              <p className="text-fx-500 text-sm">May 2024 — May 2027</p>
              <p className="text-fx-700">Master of Business Administration (MBA)</p>
            </div>
            <div>
              <p className="font-semibold text-fx-black">University of Bridgeport</p>
              <p className="text-fx-500 text-sm">Aug 2008 — May 2011</p>
              <p className="text-fx-700">Master of Science (MS), Electrical Engineering</p>
            </div>
            <div>
              <p className="font-semibold text-fx-black">Gujarat University</p>
              <p className="text-fx-500 text-sm">Jun 2003 — May 2007</p>
              <p className="text-fx-700">Bachelor of Science (BS), Electronics and Telecommunications</p>
            </div>
            <div>
              <p className="font-semibold text-fx-black">The Maharaja Sayajirao University of Baroda</p>
              <p className="text-fx-500 text-sm">May 1998 — Jun 2001</p>
              <p className="text-fx-700">Diploma of Education, Petroleum Engineering</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-fx-black border-b border-fx-200 pb-2">Experience</h2>
          <div className="space-y-8">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-fx-black">Vi — Chicago, Illinois, United States</p>
                <p className="text-fx-500 text-sm">Full-time · 8 yrs 3 mos</p>
              </div>
              <div className="pl-4 border-l-2 border-fx-200 space-y-3">
                <div>
                  <p className="font-medium text-fx-black">IT Development Manager</p>
                  <p className="text-fx-500 text-sm">May 2022 – Present · 3 yrs 2 mos</p>
                </div>
                <div>
                  <p className="font-medium text-fx-black">Senior IT Developer</p>
                  <p className="text-fx-500 text-sm">Feb 2022 – May 2022 · 4 mos</p>
                </div>
                <div>
                  <p className="font-medium text-fx-black">IT Developer</p>
                  <p className="text-fx-500 text-sm">Apr 2017 – Feb 2022 · 4 yrs 11 mos</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-fx-black">Gogo — Chicago, Illinois, United States</p>
                <p className="text-fx-500 text-sm">Full-time · 1 yr 11 mos</p>
              </div>
              <div className="pl-4 border-l-2 border-fx-200">
                <div>
                  <p className="font-medium text-fx-black">IT Developer</p>
                  <p className="text-fx-500 text-sm">May 2015 – Mar 2017 · 1 yr 11 mos</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-fx-black">BTI Solutions — Overland Park, Kansas, United States</p>
                <p className="text-fx-500 text-sm">Full-time · 4 yrs 1 mo</p>
              </div>
              <div className="pl-4 border-l-2 border-fx-200 space-y-3">
                <div>
                  <p className="font-medium text-fx-black">Senior Consultant, Samsung Electronics</p>
                  <p className="text-fx-500 text-sm">Mar 2013 – May 2015 · 2 yrs 3 mos</p>
                </div>
                <div>
                  <p className="font-medium text-fx-black">Consultant, Samsung Electronics</p>
                  <p className="text-fx-500 text-sm">May 2011 – Mar 2013 · 1 yr 11 mos</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-fx-black">Avion Systems — Alpharetta, Georgia, United States</p>
                <p className="text-fx-500 text-sm">Full-time · 8 mos</p>
              </div>
              <div className="pl-4 border-l-2 border-fx-200">
                <div>
                  <p className="font-medium text-fx-black">Information Technology Internship</p>
                  <p className="text-fx-500 text-sm">Oct 2010 – May 2011 · 8 mos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-fx-black border-b border-fx-200 pb-2">Certifications</h2>
          <div className="space-y-4">
            {[
              { name: 'Microsoft Certified: Fabric Analytics Engineer Associate', id: 'Credential ID: 553234B38CB2E797' },
              { name: 'Microsoft Certified: Azure Solutions Architect Expert', id: 'Certification Number: I028-5406' },
              { name: 'Microsoft Certified: Azure AI Engineer Associate', id: 'Certification Number: I554-9667' },
              { name: 'Microsoft Certified: Azure Data Scientist Associate', id: 'Certification Number: I498-6014' },
              { name: 'Microsoft Certified: Azure Data Engineer Associate', id: 'Certification Number: I417-6814' },
              { name: 'Microsoft Certified: Azure Fundamentals', id: 'Certification Number: H492-5488' },
              { name: 'MCSA: SQL 2016 Business Intelligence Development', id: 'Certification Number: H423-1733' },
              { name: 'MCSA: SQL 2016 Database Development', id: 'Certification Number: H412-7972' },
              { name: 'MCSE: Data Management And Analytics', id: 'Certification Number: H328-9292' },
              { name: 'MCSA: BI Reporting', id: 'Certification Number: H309-8239' },
            ].map((cert) => (
              <div key={cert.id}>
                <p className="font-medium text-fx-black">{cert.name}</p>
                <p className="text-fx-500 text-sm">{cert.id}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
