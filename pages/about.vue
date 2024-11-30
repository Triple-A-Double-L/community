<script setup lang="ts">
import { PageSection } from "~/components/layout";
import {MemberCard} from "~/components/ui/member";
import type { Member } from "~/types";

const { data: members } = await useAsyncData("/members", () =>
  queryContent<Member>('/members').find()
);
</script>

<template>
  <PageSection>
    <div
      class="relative border-b border-gray-200 dark:border-gray-800 py-12 lg:py-16"
    >
      <h1
        class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
      >
        About
      </h1>
      <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
        Conosci le menti che hanno dato vita a questo progetto. Il team "Triple A, Double L" è un gruppo di studenti di ingegneria informatica del Politecnico di Milano che per il corso di Foundation of Human Computer Interaction ha deciso di sviluppare un'applicazione che permetta ai cittadini di informarsi, segnalare e proporre miglioramenti per le città italiane.
      </p>
    </div>
    <div class="mt-8 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
      <MemberCard v-for="member in members" :key="member.slug" :data="member" />
    </div>
  </PageSection>
</template>
