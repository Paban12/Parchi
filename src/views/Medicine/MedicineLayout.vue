<template>
  <section class="medicine-layout">
    <div class="container">
      <div class="medicine-list-card">
        <div class="pre-search">
          <div class="heading">
            <div class="title">Find Medicine Here</div>
            <div class="no">980</div>
          </div>
          <div class="text">
             Dolore, expedita. Fugit nostrum quisquam animi modi? Illo beatae cum ducimus dolore!
          </div>
          <div class="search-row">
            <div class="searchbar">
              <input type="text" placeholder="Search Medicine Type">
              <img src="/src/assets/images/png/search.png" alt="">
            </div>
            <router-link to="/add-medicine" class="btn black-btn">Add Medicine</router-link>
          </div>
        </div>
        <div class="medicine-list">
          <!-- add 'active' class when active -->
          <div class="list-item">
            <div class="med-info">
              <div class="name">Corocine 650</div>
              <div class="drugs">
                (Composition Formulation) 
              </div>
            </div>
            <div class="power">650 MG</div>
            <img src="/src/assets/images/png/star.png" class="star-img" alt="">
          </div>
        </div>
      </div>
      <div class="medicine-container">
        <div class="our-medicine">
          <div class="card">
            <div class="heading">
              <div class="title">
                <h3>Our Medicines</h3>
                <router-link to="/medicine" class="btn black-btn">View All</router-link>
              </div>
              <div class="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, distinctio?
              </div> 
            </div>
            <div class="list-container">
              <div class="list-item">
                <div class="med-info">
                  <div class="name">Corocine 650</div>
                  <div class="drugs">
                    (Composition Formulation) 
                  </div>
                </div>
                <div class="right flex align-center gap-10">
                  <div class="power">650 MG</div>
                  <router-link to="/add-medicine">
                    <img src="/src/assets/images/png/edit.png" class="star-img" alt="">
                  </router-link>
                  <img src="/src/assets/images/png/delete.png" @click.prevent="medicine.confirmModal = true" class="star-img" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <Modal v-model:show="medicine.confirmModal" class="confirm-modal">
      <h4>
        Are you sure want to Delete
      </h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="medicine.confirmModal = false">Cancel</button>
        <button class="btn confirm-btn">Confirm</button>
      </div>      
    </Modal>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const medicine = reactive({
    confirmModal: false,
  })
</script>

<style>

</style>