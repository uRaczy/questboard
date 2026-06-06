import { mockUsers } from "@/mocks/users";

export function getUserNameById(id?: string) {
  if (!id) {
    return "Unknown creator";
  }

  return mockUsers.find((user) => user.id === id)?.name ?? "Unknown creator";
}

export const getCreatorName = getUserNameById;
