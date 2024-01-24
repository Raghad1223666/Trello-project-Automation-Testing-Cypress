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

  cardIntercept(cardId){
   return cy.intercept(`/1/card/${cardId}?fields=id&members=true&member_fields=id`).as("cardOpen");
  }

  boardName() {
    const radomNumber = Math.floor(Math.random() * 100);
    return `Board No.${radomNumber}`;
  }
}

export default SharedDataUtils;
