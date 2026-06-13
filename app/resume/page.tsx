import Duration from '@/components/Duration'

const certifications = [
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
]

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-fx-500 whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-fx-200" />
    </div>
  )
}

export default function Resume() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="space-y-12">

        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-fx-black">Chintan Patel</h1>
          <nav className="flex justify-center gap-6 text-fx-red">
            <a href="/" className="hover:text-fx-orange transition-colors">About</a>
            <a href="/writing" className="hover:text-fx-orange transition-colors">Writing</a>
            <a href="/bookshelf" className="hover:text-fx-orange transition-colors">Bookshelf</a>
          </nav>
        </header>

        {/* Experience */}
        <section>
          <SectionDivider title="Experience" />
          <div className="space-y-8">

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-semibold text-fx-black">Vi</p>
                <span className="text-xs text-fx-500 shrink-0"><Duration from="2017-04-01" /></span>
              </div>
              <p className="text-xs text-fx-500 mt-0.5 mb-3">Chicago, Illinois · Full-time</p>
              <div className="pl-4 border-l-2 border-fx-100 space-y-2.5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fx-green shrink-0" />
                    <p className="text-sm font-semibold text-fx-black">IT Development Manager</p>
                  </div>
                  <span className="text-xs text-fx-500 shrink-0">May 2022 – Present · <Duration from="2022-05-01" /></span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-fx-700 pl-3.5">Senior IT Developer</p>
                  <span className="text-xs text-fx-500 shrink-0">Feb 2022 – May 2022</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-fx-700 pl-3.5">IT Developer</p>
                  <span className="text-xs text-fx-500 shrink-0">Apr 2017 – Feb 2022</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-semibold text-fx-black">Gogo</p>
                <span className="text-xs text-fx-500 shrink-0">1 yr 11 mos</span>
              </div>
              <p className="text-xs text-fx-500 mt-0.5 mb-3">Chicago, Illinois · Full-time</p>
              <div className="pl-4 border-l-2 border-fx-100">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-fx-700">IT Developer</p>
                  <span className="text-xs text-fx-500 shrink-0">May 2015 – Mar 2017</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-semibold text-fx-black">BTI Solutions</p>
                <span className="text-xs text-fx-500 shrink-0">4 yrs 1 mo</span>
              </div>
              <p className="text-xs text-fx-500 mt-0.5 mb-3">Overland Park, Kansas · Full-time</p>
              <div className="pl-4 border-l-2 border-fx-100 space-y-2.5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-fx-700">Senior Consultant, Samsung Electronics</p>
                  <span className="text-xs text-fx-500 shrink-0">Mar 2013 – May 2015</span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-fx-700">Consultant, Samsung Electronics</p>
                  <span className="text-xs text-fx-500 shrink-0">May 2011 – Mar 2013</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-semibold text-fx-black">Avion Systems</p>
                <span className="text-xs text-fx-500 shrink-0">8 mos</span>
              </div>
              <p className="text-xs text-fx-500 mt-0.5 mb-3">Alpharetta, Georgia · Full-time</p>
              <div className="pl-4 border-l-2 border-fx-100">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-fx-700">Information Technology Internship</p>
                  <span className="text-xs text-fx-500 shrink-0">Oct 2010 – May 2011</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Education */}
        <section>
          <SectionDivider title="Education" />
          <div className="space-y-6">

            <div>
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-fx-black">University of Chicago Booth School of Business</p>
                <span className="text-xs text-fx-500 shrink-0 mt-0.5">2024 – 2027</span>
              </div>
              <p className="text-sm text-fx-700 mt-0.5">Master of Business Administration (MBA)</p>
            </div>

            <div>
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-fx-black">University of Bridgeport</p>
                <span className="text-xs text-fx-500 shrink-0 mt-0.5">2008 – 2011</span>
              </div>
              <p className="text-sm text-fx-700 mt-0.5">Master of Science, Electrical Engineering</p>
            </div>

            <div>
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-fx-black">Gujarat University</p>
                <span className="text-xs text-fx-500 shrink-0 mt-0.5">2003 – 2007</span>
              </div>
              <p className="text-sm text-fx-700 mt-0.5">Bachelor of Science, Electronics and Telecommunications</p>
            </div>

            <div>
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-fx-black">The Maharaja Sayajirao University of Baroda</p>
                <span className="text-xs text-fx-500 shrink-0 mt-0.5">1998 – 2001</span>
              </div>
              <p className="text-sm text-fx-700 mt-0.5">Diploma, Petroleum Engineering</p>
            </div>

          </div>
        </section>

        {/* Certifications */}
        <section>
          <SectionDivider title="Certifications" />
          <div className="space-y-5">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-start justify-between gap-4">
                <p className="text-sm font-medium text-fx-black leading-snug">{cert.name}</p>
                <span className="text-xs text-fx-500 shrink-0 mt-0.5">{cert.id}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
