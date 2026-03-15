import React from "react";

const Projects = () => {
  return (
    <div>
      <section
        class="py-24 bg-brand-navy text-white overflow-hidden"
        data-purpose="portfolio-section"
        id="projects"
      >
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 class="text-brand-cyan font-heading font-bold tracking-widest text-sm mb-4">
                SELECTED WORKS
              </h2>
              <h3 class="text-4xl md:text-5xl font-heading font-bold">
                Innovation Portfolio
              </h3>
            </div>
            <div class="text-brand-muted max-w-md text-right">
              Showcasing specialized solutions where clean code meets cognitive
              automation.
            </div>
          </div>

          <div class="space-y-32">
            <div class="relative group grid grid-cols-1 lg:grid-cols-12 items-center">
              <div class="lg:col-span-7 z-10 transition-transform duration-500 group-hover:-translate-x-2">
                <img
                  alt="CogniFlow Project"
                  class="rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgulex0TODFS_RvDMGRp8zYamZm35FO5fynmg_tmIyupvn2Sn82C49mJxlyBRPQBa-6e-G60avPHkLkafJpFNyGpWA4LuaorAOuk9DHkgNjtA2P520uVSrXoIwg0gTFU9uRiQhgsinWpPEOMQQoRbgq9GaNrWNEl3iVbdHgkLRC_lpjoNdSupNNWO7i7upVb2yXjNFUE2IVKBN00L9xcw0WzrYotjNSV_H1qs4BdCRY7IyHZoS4-GjskqLlzM_j6TykUXAnHbpHsw"
                />
              </div>
              <div class="lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0 lg:absolute lg:right-0 glass-card bg-brand-navy/80 p-10 rounded-2xl z-20 border border-brand-cyan/20">
                <h4 class="text-brand-cyan font-heading font-bold text-2xl mb-4">
                  CogniFlow AI
                </h4>
                <p class="text-gray-300 mb-6 leading-relaxed">
                  A comprehensive workflow automation platform that uses NLP to
                  categorize tasks and predict bottlenecks in supply chains.
                  Built with React, Node.js, and OpenAI's GPT-4.
                </p>
                <ul class="flex flex-wrap gap-4 text-xs font-heading font-bold text-brand-cyan mb-8 uppercase tracking-widest">
                  <li>MERN Stack</li>
                  <li>GPT-4 Integration</li>
                  <li>WebSocket</li>
                </ul>
                <a
                  class="inline-flex items-center gap-2 hover:text-brand-cyan transition-colors"
                  href="#"
                >
                  VIEW CASE STUDY
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div class="relative group grid grid-cols-1 lg:grid-cols-12 items-center">
              <div class="lg:col-span-6 mt-8 lg:mt-0 glass-card bg-brand-navy/80 p-10 rounded-2xl z-20 border border-brand-teal/20 order-2 lg:order-1">
                <h4 class="text-brand-teal font-heading font-bold text-2xl mb-4">
                  Neural Analytics
                </h4>
                <p class="text-gray-300 mb-6 leading-relaxed">
                  Real-time biometric data visualization tool for medical
                  researchers. Implemented custom D3.js layers on a React
                  dashboard with MongoDB time-series data.
                </p>
                <ul class="flex flex-wrap gap-4 text-xs font-heading font-bold text-brand-teal mb-8 uppercase tracking-widest">
                  <li>D3.js</li>
                  <li>Time-Series DB</li>
                  <li>Docker</li>
                </ul>
                <a
                  class="inline-flex items-center gap-2 hover:text-brand-teal transition-colors"
                  href="#"
                >
                  VIEW REPOSITORY
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="lg:col-span-7 lg:col-start-6 z-10 transition-transform duration-500 group-hover:translate-x-2 order-1 lg:order-2">
                <img
                  alt="Neural Analytics Project"
                  class="rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAtGdlo_Pzvo1IdFazrdAq5zlg4Cgr6ikIsOwNPv-yo2Ieuue7WQp-c_UYdi9T8e1tzvQ9RfmvzqvEh2_5ogGti3W9nHNpSdPnDuBRUXj09pY4Sg837D9R77PyHaROY-9jBrAFXktjRVqMYA0Ocp99ogADVwnGPuJwgZW5JVUYt8THBhGWElR33vw8oxJxPcoGyzZzSs48g6GmrGxOTPnF5rfz1bwtf-fnivVCyWx3RcEZa562bMCl-qqN1PMyGGegvo-KVLSWfgg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
