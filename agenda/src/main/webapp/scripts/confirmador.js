/**
 * Confirmacao de exclusao de contato
 * @author Isac Kaik
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusao do contato?")
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon
	}
}