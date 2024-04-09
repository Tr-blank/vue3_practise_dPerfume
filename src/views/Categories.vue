<script setup>
import ProductCard from '@/components/ProductCard.vue'

const perfumes = [
  {
    category: '清新海洋',
    id: '-Ni3EC_c7RwSD5BXb1m2',
    image:
      'https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '500',
    price: '450',
    title: '藍色夢境',
    unit: '50ml'
  },
  {
    category: '木質',
    id: '-Ni3EPyAsMsKfa-8kiDF',
    image:
      'https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&q=80&w=1958&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '600',
    price: '550',
    title: '夜之誘惑',
    unit: '30ml'
  },
  {
    category: '花香調',
    id: '-Ni3EZArj214JjtjOvp4',
    image:
      'https://images.unsplash.com/photo-1544468266-6a8948003cd7?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '900',
    price: '850',
    title: '花語綻放',
    unit: '100ml'
  },
  {
    category: '果香調',
    id: '-Ni3EjS5hT54sXomo36S',
    image:
      'https://images.unsplash.com/photo-1578996834254-13d1b661a5ed?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '480',
    price: '430',
    title: '清新晨露',
    unit: '50ml'
  },
  {
    category: '果香調',
    id: '-Ni3EvEzQ9OqqM2oSlZv',
    image:
      'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '520',
    price: '480',
    title: '甜蜜誘人',
    unit: '30ml'
  },
  {
    category: '木質',
    id: '-Ni3F2xU_6v8JsXRdYWt',
    image:
      'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '700',
    price: '650',
    title: '神秘東方',
    unit: '50ml'
  },
  {
    category: '木質',
    id: '-Ni3F9L0Mf1B_e1y2hhN',
    image:
      'https://images.unsplash.com/photo-1592842414746-a2fd2101381f?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '850',
    price: '800',
    title: '優雅夜晚',
    unit: '75ml'
  },
  {
    category: '花香調',
    id: '-Ni3FKfcRlYGK4OKEKOm',
    image:
      'https://images.unsplash.com/photo-1592247691114-69a06342531a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '980',
    price: '930',
    title: '綠野仙踪',
    unit: '100ml'
  },
  {
    category: '果香調',
    id: '-Ni3FcRRlvscTYbyu83p',
    image:
      'https://images.unsplash.com/photo-1593886564059-13d6b735987b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '550',
    price: '500',
    title: '陽光活力',
    unit: '60ml'
  },
  {
    category: '木質',
    id: '-Ni3FmO-Rb5GtsErRSOJ',
    image:
      'https://images.unsplash.com/photo-1559264730-1533a6ec0433?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '630',
    price: '580',
    title: '星夜閃耀',
    unit: '40ml'
  },
  {
    category: '花香調',
    id: '-Ni3Fwr5Q-3CXXtr75Tz',
    image:
      'https://images.unsplash.com/photo-1587304883108-8bbeaac37125?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '650',
    price: '610',
    title: '清雅櫻花',
    unit: '50ml'
  },
  {
    category: '木質',
    id: '-Ni3GFCGuX-q-hv8aHsv',
    image:
      'https://images.unsplash.com/photo-1588680388356-127f57196ca8?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_enabled: 1,
    origin_price: '550',
    price: '540',
    title: '森林繆思',
    unit: '30ml'
  }
]
</script>

<template>
  <main class="main-container flex flex-wrap -mx-2">
    <ProductCard
      v-for="perfume in perfumes"
      :key="perfume.id"
      :product="perfume"
      class="w-1/4 p-4"
    />
  </main>
</template>
