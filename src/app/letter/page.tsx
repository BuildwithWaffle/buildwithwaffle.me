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
          <p>this is the first message. not from a company. not from a pitch deck. not from a brochure trying to sell you a vision. just from us.</p>
          
          <p>hi. welcome to waffle.</p>

          <p>you've probably heard words like "build," "community," "founders," "hackathons," "creators" so many times… they start to feel like buzzwords. they've lost meaning. overused in events that promised the moon and delivered pizza. plastered on every tech club, every brochure, every event.</p>

          <p>but waffle isn't that. waffle isn't trying to be another startup club, or tech gang, or code cult. waffle is something raw. real. personal.</p>

          <p>waffle is… the place i always wished existed. a space where you don't need to be a genius. you don't need to know VC jargon. you don't need a co-founder or an elevator pitch. you don't need to know what the fuck to do with your life. you just need one thing:</p>

          <p><strong>💥 the urge to try.</strong></p>

          <p>the urge to build a dumb project. to write that essay you never submitted. to drop that YouTube video even if no one watches. to design your first Figma screen even if it's ugly. to code your first page even if it crashes. to start something. anything. and not be laughed at for it.</p>

          <p>waffle is for people like us — misfits who wanted to build but had nowhere to begin. who never made it to the "smart group" chat. who weren't top rankers. who didn't just want certificates or placements. but wanted something more. a tribe. a vibe. a launchpad.</p>

          <p>launchpad — not to Silicon Valley. not to the metaverse. but to your own voice.</p>

          <p>because maybe you've spent years waiting. waiting for a mentor. waiting for a team. waiting for "the right time." waiting for permission. waiting to be chosen.</p>

          <p>but what if you stop waiting? what if you just said: <strong>"screw it, i'll go first."</strong></p>

          <p>waffle is that choice. it's the fuck-it-let's-build button on your life. and you don't have to do it alone.</p>

          <p>right now, Build with Waffle is nothing fancy. we've got a Discord group. a website that's half-broken. a Notion page full of spelling errors. we don't have sponsors. we don't have clout. no swag. no influencers. we're not on TechCrunch. we're not on Shark Tank. we don't have YC badges. we don't have viral TED Talks. we only have belief. but this belief? this belief is loud. and it's spreading.</p>

          <p>we've got students from 10+ colleges already jumping in. from VIT, Amity, IIIT, Thapar, LPU, UPES, SRM, MNIT, and more. students texting us saying: "yo, this is the place I've been waiting for."</p>

          <p>we're not promising unicorns. we're not building for valuations. we're building for momentum. for your first build. your first ship. your first "oh damn, i actually did this."</p>

          <p>this is the magic moment: when that weird, messy idea in your head finally makes it out into the world. when it's not just "in progress" anymore. and whether 1 person sees it or 1,000 — you've moved.</p>

          <p>in the next 30 days, we're gonna:<br/>
          🚀 launch real projects<br/>
          🎯 ship messy but meaningful stuff<br/>
          ✨ showcase student work that never gets applause in classrooms<br/>
          🎤 run build nights in hostels and dorm rooms<br/>
          🧠 host AMAs with real people — not just blue-tick founders<br/>
          📖 tell stories that never make it to LinkedIn<br/>
          🎨 bring together coders, creators, designers, writers, filmmakers, misfits — all of them</p>

          <p>this isn't a coding bootcamp. this is a creator uprising. it's not just about JavaScript and APIs. it's about ideas. it's about you.</p>

          <p>tech? sure. film? yes. music? content? writing? fuck yes.</p>
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

        <p>and look — we don't know if this will work. we don't have a roadmap. we don't have an MBA. we don't have a backup plan. but for the first time in our lives, we are not afraid. because we're not doing this alone.</p>

        <p>we've got people who believe just as hard. people who show up late at night with wild ideas. people who fix bugs at 2 AM because they care. people who've never been "top of the class," but have always been first to try.</p>

        <p>we've got students building waffle chapters in colleges we've never even been to. we've got reels being made before the homepage is ready. we've got DMs that say: "hey, how can I help?"</p>

        <p>and most importantly — we've got you.</p>

        <p>you — the one reading this. you — who might feel like you're not enough. you — who's been waiting to start something, but kept stopping. you — who still has that spark.</p>

        <p>now's the time. waffle isn't the answer. it's the question: <strong>what will you build if no one stops you?</strong></p>

        <p>this is day zero. the day we begin. you'll remember this moment. not because it was shiny. not because it trended. but because something inside you finally clicked. you stopped waiting. you started moving.</p>

        <p>and together — we stopped asking for permission and started showing the world what students can actually do.</p>

        <p>with love. with fire. with waffles. 🧇</p>

        <p><strong>— Team Waffle Space</strong></p>
      </div>
    </main>
  );
}
