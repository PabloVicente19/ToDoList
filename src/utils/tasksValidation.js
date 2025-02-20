
function tasksValidation(text) {
  if (!text) {
    return { valid: false, text: '¡Ocurrio un error, por favor ingrese una tarea valida!' }
  }
  if (text.trim() === "") {
    return { valid: false, text: '¡La tarea no puede estar vacia!' }
  }
  if (text.length < 3) {
    return { valid: false, text: '¡La tarea debe tener al menos 3 caracteres!' }
  }

  return { valid: true, text: '' }
}

export default tasksValidation;
