<script setup>
import {
  FirstGraphsComp,
  SectionCards,
  ManageAllComp,
  ManagePeoples,
  ManageOrders
} from '@/components/admin/'
</script>

<template>
  <main>
    <SectionCards />
    <FirstGraphsComp />
    <ManageAllComp />
    <ManagePeoples id="vehicles employees" />
    <ManageOrders />
  </main>
</template>
