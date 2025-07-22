export default function sendResponse (res, status, data, msg) {
  res.status(status).json({
    status,
    msg,
    data: data
  })
}
