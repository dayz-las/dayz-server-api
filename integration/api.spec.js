const supertest = require("supertest");
const { app } = require("../src/server");
const dayzServerLib = require("dayz-server-lib");
const request = supertest(app);
const {
  serverStatusResponseFixture
} = require("./fixture/server-status-response.fixture");
const {
  getServerStatusUseCaseFixture
} = require("./fixture/get-server-status-usecase.fixture");

describe("api", () => {
  it("Should return server status when GET /api/server/status is called, given getServerStatusUseCase resolves", done => {
    dayzServerLib.status = jest.fn(() =>
      Promise.resolve(getServerStatusUseCaseFixture)
    );

    request.get("/api/server/status").end((err, res) => {
      expect(res.body).toEqual(serverStatusResponseFixture);
      done();
    });
  });
});
