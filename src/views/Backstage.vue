<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
const apiBaseUrl = 'https://express-dperfume-api.onrender.com'
const isOpenPopup = ref(false)
const popupTitle = ref('')
const perfumes = ref([])
const perfumeData = ref({})
const isLoading = computed(() => perfumes.value.length === 0)

const getPerfumes = async () => {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/perfumes`)
    perfumes.value = data
  } catch (error) {
    console.log(error)
  }
}

const getOnePerfumes = async (id) => {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/perfumes/${id}`)
    perfumeData.value = data
  } catch (error) {
    console.log(error)
  }
}

const updatePerfumes = async (data) => {
  try {
    const id = Math.random().toString(36).substring(2, 8)
    const postData = { ...data, id }
    await axios.patch(`${apiBaseUrl}/perfumes/${data._id}`, postData)
    await getPerfumes()
  } catch (error) {
    console.log(error)
  } finally {
    closePopup()
  }
}

const createPerfumes = async (data) => {
  try {
    const id = Math.random().toString(36).substring(2, 8)
    const postData = { ...data, id }
    await axios.post(`${apiBaseUrl}/perfumes`, postData)
    await getPerfumes()
  } catch (error) {
    console.log(error)
  } finally {
    closePopup()
  }
}

const deleteProduct = async (id) => {
  try {
    await await axios.delete(`${apiBaseUrl}/perfumes/${id}`)
    await getPerfumes()
  } catch (error) {
    console.log(error)
  }
}

const submitForm = async (type, data) => {
  if (type === '新增香水') {
    try {
      await createPerfumes(data)
      closePopup()
    } catch (error) {
      console.log(error)
    }
  } else {
    try {
      await updatePerfumes(data)
    } catch (error) {
      console.log(error)
    }
  }
}

const openPopup = (type, id) => {
  isOpenPopup.value = true
  popupTitle.value = type
  if (type === '新增香水') {
    perfumeData.value = {}
  } else {
    getOnePerfumes(id)
  }
}

const closePopup = () => {
  isOpenPopup.value = false
  perfumeData.value = {}
}

getPerfumes()
</script>

<template>
  <main class="main-container py-4">
    <div class="flex border-b border-perfumes-gray justify-between text-lg py-2 items-center">
      <h3 class="text-2xl">商品管理頁</h3>
      <span
        @click="openPopup('新增香水')"
        class="bg-perfumes-main-light text-white py-2 px-4 cursor-pointer"
        >新增香水</span
      >
    </div>
    <ul class="text-center">
      <li class="grid grid-cols-6 border-b border-perfumes-main-light py-2">
        <span class="w-8">照片</span>
        <span>名稱</span>
        <span>分類</span>
        <span>價格</span>
        <span>狀態</span>
        <span>操作</span>
      </li>
      <li v-if="isLoading" class="p-40 text-3xl text-center">loading ...</li>
      <template v-else>
        <li
          v-for="perfume in perfumes"
          :key="perfume.id"
          class="grid grid-cols-6 border-b border-perfumes-main-light py-2"
        >
          <span class="w-16 h-16"
            ><img :src="perfume.image" :alt="perfume.title" class="w-full h-full object-cover"
          /></span>
          <span>{{ perfume.title }}</span>
          <span>{{ perfume.category }}</span>
          <span>{{ perfume.price }}</span>
          <span>{{ perfume.is_enabled }}</span>
          <span>
            <i
              @click="openPopup('編輯香水', perfume._id)"
              class="material-icons border border-perfumes-main-light p-1 cursor-pointer mx-1 text-base"
            >
              edit
            </i>
            <i
              @click="deleteProduct(perfume._id)"
              class="material-icons border border-perfumes-main-light p-1 cursor-pointer mx-1 text-base"
            >
              delete
            </i>
          </span>
        </li>
      </template>
    </ul>
    <div
      v-if="isOpenPopup"
      class="fixed top-0 left-0 w-screen h-screen z-10 flex items-center justify-center"
    >
      <div class="bg-white p-4 border border-perfumes-main-light min-w-[300px]">
        <div class="flex justify-between border-b border-perfumes-main-light text-xl">
          <span>{{ popupTitle }}</span>
          <span @click="closePopup" class="material-icons cursor-pointer"> clear </span>
        </div>
        <div>
          <div class="mb-3">
            <label for="title" class="block py-1">名稱</label>
            <input
              type="text"
              class="border border-perfumes-main-dark py-1 px-2 w-full"
              id="title"
              v-model="perfumeData.title"
              required
            />
          </div>
          <div class="mb-3">
            <label for="category" class="block py-1">類別</label>
            <input
              type="text"
              class="border border-perfumes-main-dark py-1 px-2 w-full"
              id="category"
              v-model="perfumeData.category"
              required
            />
          </div>
          <div class="mb-3">
            <label for="image" class="block py-1">圖片連結</label>
            <input
              type="url"
              class="border border-perfumes-main-dark py-1 px-2 w-full"
              id="image"
              v-model="perfumeData.image"
              required
            />
          </div>
          <div class="mb-3">
            <label for="price" class="block py-1">售價</label>
            <input
              type="number"
              class="border border-perfumes-main-dark py-1 px-2 w-full"
              id="price"
              v-model.number="perfumeData.price"
              required
            />
          </div>
          <div class="mb-3">
            <label for="originPrice" class="block py-1">原價</label>
            <input
              type="number"
              class="border border-perfumes-main-dark py-1 px-2 w-full"
              id="origin_price"
              v-model.number="perfumeData.origin_price"
              required
            />
          </div>
          <div class="mb-3">
            <label for="unit" class="block py-1">庫存單位</label>
            <input
              type="text"
              class="border border-perfumes-main-dark py-1 px-2 w-full"
              id="unit"
              v-model="perfumeData.unit"
              required
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="isEnabled"
              v-model="perfumeData.is_enabled"
            />
            <label for="isEnabled" class="form-check-label">啟用</label>
          </div>
          <div class="text-right">
            <span
              @click="submitForm(popupTitle, perfumeData)"
              class="bg-perfumes-main text-white py-1 px-4 text-base cursor-pointer"
            >
              儲存
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
