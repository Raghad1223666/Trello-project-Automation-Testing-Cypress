import { APIKEY, APITOKEN } from "../../support/Constants";

class SharedDataUtils {
  createNewBoard(boardName) {
    return cy.request({
      method: "POST",
      url: `/1/boards/?name=${boardName}&key=${APIKEY}&token=${APITOKEN}`,
    });
  }

  deleteCreatedBoard(id) {
    return cy.request({
      method: "DELETE",
      url: `/1/boards/${id}?key=${APIKEY}&token=${APITOKEN}`,
    });
  }

  getListsOnBoard(boardId) {
    return cy.request({
      method: "GET",
      url: `/1/boards/${boardId}/lists?key=${APIKEY}&token=${APITOKEN}`,
      header: "Accept: application/json",
    });
  }

  createNewCard(listId, cardName, isTemplate) {
    return cy.request({
      method: "POST",
      url: `/1/cards?idList=${listId}&key=${APIKEY}&token=${APITOKEN}`,
      header: "Accept: application/json",
      body: { name: cardName, isTemplate },
    });
  }
}

export default SharedDataUtils;
