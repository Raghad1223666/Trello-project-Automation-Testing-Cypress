import { APIKEY, TOKEN } from "../../support/Constants";

class SharedDataUtils {
  createNewBoard(boardName) {
    return cy.request({
      method: "POST",
      url: `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKEY}&token=${TOKEN}`,
    });
  }

  deleteCreatedBoard(id) {
    return cy.request({
      method: "DELETE",
      url: `https://api.trello.com/1/boards/${id}?key=${APIKEY}&token=${TOKEN}`,
    });
  }
}

export default SharedDataUtils;
