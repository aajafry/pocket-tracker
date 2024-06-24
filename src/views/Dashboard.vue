<template>
  <main
    class="flex flex-col-reverse sm:flex-row justify-between sm:items-start my-12"
  >
    <div class="flex-1">
      
      <TransitionForm @addTransaction="addTransaction" />
    </div>
    <div class="flex-1">
      <BalanceStatus 
        :income="income" 
        :expense="expense" 
        :balance="balance" 
      />
      <BalanceHistory
        :transactions="transactions"
        @removeTransaction="removeTransaction"
      />
    </div>
  </main>
</template>

<script setup>
import { computed, ref, onMounted, watchEffect } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
import BalanceHistory from "../components/organisms/BalanceHistory.vue";
import BalanceStatus from "../components/organisms/BalanceStatus.vue";
import TransitionForm from "../components/organisms/TransitionForm.vue";

const token = ref(localStorage.getItem("token") || '');
const transactions = ref([]);
const toast = useToast()


const getTransactions = async () => {
  try {
    const { data: { transactions : fetchedTransactions } } = await axios.get("https://pocket-tracker-api.vercel.app/api/transaction", {
      headers:{
        Authorization: `Bearer ${token.value}`
      }
    })
    transactions.value = fetchedTransactions;
  } catch (error) {
    console.error("failed to fetching transaction:",error)
  }
}

onMounted( async () => await getTransactions());

watchEffect(async () => await getTransactions());


const addTransaction = async (transaction) => {
  try {
    const {data: { transaction: newTransaction }} = await axios.post("https://pocket-tracker-api.vercel.app/api/transaction", transaction, {
      headers:{
        Authorization: `Bearer ${token.value}`
      }
    });
    transactions.value.push(newTransaction);
  } catch (error) {
    console.error("failed to adding transaction:", error)
  }
}

const removeTransaction = async (id) => {
  try {
    await axios.delete(`https://pocket-tracker-api.vercel.app/api/transaction/${id}`, {
      headers:{
        Authorization: `Bearer ${token.value}`
      }
    })
    transactions.value = transactions.value.filter(
      (transaction) => transaction._id !== id
    );
    toast.success("Transaction Removed Successfully")
  } catch (error) {
    toast.error("Failed to Remove Transaction")
    console.error("failed to removing transaction:", error)
  }
}

const income = computed(() => {
  return transactions.value.reduce((total, transaction) => {
    return transaction.type === "income" ? total + transaction.amount : total;
  }, 0);
});

const expense = computed(() => {
  return transactions.value.reduce((total, transaction) => {
    return transaction.type === "expense" ? total + transaction.amount : total;
  }, 0);
});

const balance = computed(() => {
  return income.value - expense.value;
});

</script>
