export default function Letter() {
  return (
    <main className="bg-black text-white pt-20 pb-8 flex flex-col items-center">
      {/* Audio + Intro Text */}
      <div className="w-full max-w-3xl px-4">
        <div className="flex flex-col items-center">
          <audio controls className="w-full md:w-3/4 rounded-md">
            <source src="/waffle-intro.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-sm text-center mt-2 text-gray-300">
            [hi play above track as you read this]
          </p>
        </div>

        {/* Main Text Content */}
        <div className="mt-6 space-y-4 leading-relaxed text-base">
          <p>this is the first message.</p>
          <p>not from a company.</p>
          <p>not from a pitch deck.</p>
          <p>not from a brochure trying to sell you a vision.</p>
          <p>just from us.</p>

          <p>hi.</p>
          <p>welcome to waffle.</p>

          <p>you've probably heard words like "build," "community," "founders," "hackathons," "creators" so many times…</p>
          <p>they start to feel like buzzwords.</p>
          <p>they've lost meaning.</p>
          <p>overused in events that promised the moon and delivered pizza.</p>
          <p>plastered on every tech club, every brochure, every event.</p>

          <p>but waffle isn't that.</p>
          <p>waffle isn't trying to be another startup club, or tech gang, or code cult.</p>
          <p>waffle is something raw.</p>
          <p>real.</p>
          <p>personal.</p>

          <p>waffle is… the place i always wished existed.</p>
          <p>a space where you don't need to be a genius.</p>
          <p>you don't need to know VC jargon.</p>
          <p>you don't need a co-founder or an elevator pitch.</p>
          <p>you don't need to know what the fuck to do with your life.</p>
          <p>you just need one thing:</p>

          <p><strong>💥 the urge to try.</strong></p>

          <p>the urge to build a dumb project.</p>
          <p>to write that essay you never submitted.</p>
          <p>to drop that YouTube video even if no one watches.</p>
          <p>to design your first Figma screen even if it's ugly.</p>
          <p>to code your first page even if it crashes.</p>
          <p>to start something. anything.</p>
          <p>and not be laughed at for it.</p>

          <p>waffle is for people like us —</p>
          <p>misfits who wanted to build but had nowhere to begin.</p>
          <p>who never made it to the "smart group" chat.</p>
          <p>who weren't top rankers.</p>
          <p>who didn't just want certificates or placements.</p>
          <p>but wanted something more.</p>
          <p>a tribe.</p>
          <p>a vibe.</p>
          <p>a launchpad.</p>

          <p>launchpad — not to Silicon Valley.</p>
          <p>not to the metaverse.</p>
          <p>but to your own voice.</p>

          <p>because maybe you've spent years waiting.</p>
          <p>waiting for a mentor.</p>
          <p>waiting for a team.</p>
          <p>waiting for "the right time."</p>
          <p>waiting for permission.</p>
          <p>waiting to be chosen.</p>

          <p>but what if you stop waiting?</p>
          <p>what if you just said:</p>
          <p><strong>"screw it, i'll go first."</strong></p>

          <p>waffle is that choice.</p>
          <p>it's the fuck-it-let's-build button on your life.</p>
          <p>and you don't have to do it alone.</p>

          <p>right now, Build with Waffle is nothing fancy.</p>
          <p>we've got a Discord group.</p>
          <p>a website that's half-broken.</p>
          <p>a Notion page full of spelling errors.</p>
          <p>we don't have sponsors.</p>
          <p>we don't have clout.</p>
          <p>no swag. no influencers.</p>
          <p>we're not on TechCrunch.</p>
          <p>we're not on Shark Tank.</p>
          <p>we don't have YC badges.</p>
          <p>we don't have viral TED Talks.</p>
          <p>we only have belief.</p>
          <p>but this belief?</p>
          <p>this belief is loud.</p>
          <p>and it's spreading.</p>

          <p>we've got students from 10+ colleges already jumping in.</p>
          <p>from VIT, Amity, IIIT, Thapar, LPU, UPES, SRM, MNIT, and more.</p>
          <p>students texting us saying:</p>
          <p>"yo, this is the place I've been waiting for."</p>

          <p>we're not promising unicorns.</p>
          <p>we're not building for valuations.</p>
          <p>we're building for momentum.</p>
          <p>for your first build.</p>
          <p>your first ship.</p>
          <p>your first "oh damn, i actually did this."</p>

          <p>this is the magic moment:</p>
          <p>when that weird, messy idea in your head finally makes it out into the world.</p>
          <p>when it's not just "in progress" anymore.</p>
          <p>and whether 1 person sees it or 1,000 —</p>
          <p>you've moved.</p>

          <p>in the next 30 days, we're gonna:</p>
          <p>🚀 launch real projects</p>
          <p>🎯 ship messy but meaningful stuff</p>
          <p>✨ showcase student work that never gets applause in classrooms</p>
          <p>🎤 run build nights in hostels and dorm rooms</p>
          <p>🧠 host AMAs with real people — not just blue-tick founders</p>
          <p>📖 tell stories that never make it to LinkedIn</p>
          <p>🎨 bring together coders, creators, designers, writers, filmmakers, misfits — all of them</p>

          <p>this isn't a coding bootcamp.</p>
          <p>this is a creator uprising.</p>
          <p>it's not just about JavaScript and APIs.</p>
          <p>it's about ideas.</p>
          <p>it's about you.</p>

          <p>tech? sure.</p>
          <p>film? yes.</p>
          <p>music? content? writing? fuck yes.</p>
        </div>
      </div>

      {/* Full-Width Image Grid */}
      <div className="w-full px-0 py-6 ">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="col-span-1 row-span-1 filter grayscale hover:grayscale-0 transition duration-300 mt-12">
            <img src="/images/topleft1.jpeg" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1 filter grayscale hover:grayscale-0 transition duration-300 mt-12">
            <img src="/images/topleft2.jpeg" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-2 filter grayscale hover:grayscale-0 transition duration-300 mt-12">
            <img src="/images/topright.jpeg" alt="Image" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-1 filter grayscale hover:grayscale-0 transition duration-300 mt-12">
            <img src="/images/Group2.jpeg" alt="Image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl px-4 mt-8 space-y-4 leading-relaxed text-base">
        <p><strong>waffle is the first student-led creator movement in the country that doesn't care what degree you have — only what you're building.</strong></p>

        <p>and look —</p>
        <p>we don't know if this will work.</p>
        <p>we don't have a roadmap.</p>
        <p>we don't have an MBA.</p>
        <p>we don't have a backup plan.</p>
        <p>but for the first time in our lives, we are not afraid.</p>
        <p>because we're not doing this alone.</p>

        <p>we've got people who believe just as hard.</p>
        <p>people who show up late at night with wild ideas.</p>
        <p>people who fix bugs at 2 AM because they care.</p>
        <p>people who've never been "top of the class," but have always been first to try.</p>

        <p>we've got students building waffle chapters in colleges we've never even been to.</p>
        <p>we've got reels being made before the homepage is ready.</p>
        <p>we've got DMs that say: "hey, how can I help?"</p>

        <p>and most importantly — we've got you.</p>

        <p>you — the one reading this.</p>
        <p>you — who might feel like you're not enough.</p>
        <p>you — who's been waiting to start something, but kept stopping.</p>
        <p>you — who still has that spark.</p>

        <p>now's the time.</p>
        <p>waffle isn't the answer.</p>
        <p>it's the question:</p>
        <p><strong>what will you build if no one stops you?</strong></p>

        <p>this is day zero.</p>
        <p>the day we begin.</p>
        <p>you'll remember this moment.</p>
        <p>not because it was shiny.</p>
        <p>not because it trended.</p>
        <p>but because something inside you finally clicked.</p>
        <p>you stopped waiting.</p>
        <p>you started moving.</p>

        <p>and together — we stopped asking for permission and started showing the world what students can actually do.</p>

        <p>with love.</p>
        <p>with fire.</p>
        <p>with waffles.</p>
        <p>🧇</p>

        <p><strong>— Team Waffle Space</strong></p>
      </div>
    </main>
  );
}
