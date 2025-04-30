let data = []

export function get_items() {
  return data
}

export function add_item(new_item) {
  const foundItem = data.find((item) => item.id === new_item.id)

  if (foundItem) return false

  data.push(new_item)

  return true
}

export function update_item_title_by_id(id, new_title) {
  const foundItem = data.find((item) => item.id === id)

  if (!foundItem) return false

  data = data.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        title: new_title,
      }
    }

    return item
  })

  return true
}

export function delete_item_by_id(id) {
  const foundItem = data.find((item) => item.id === id)

  if (!foundItem) return false

  data = data.filter((item) => item.id !== id)

  return true
}

export function get_item_title_by_id(id) {
  const foundItem = data.find((item) => item.id === id)

  if (foundItem) return foundItem.title

  return null
}
