'use client'

import pizzaService from "@/services/pizza.service";
import { useQuery } from "@tanstack/react-query";


export const useData = () => {
  return useQuery({
    queryKey: ["pizzas"],
    queryFn: () => pizzaService.getAll(),
    select: ({ data }) => data,
  });
};


