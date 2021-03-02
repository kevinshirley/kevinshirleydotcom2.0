import React from 'react';

function Taquin() {
  console.log('========== Taquin Puzzle ==========');

	// tableau avec la postition des cases en memoire
	var cases = [
		[],
		[],
		[],
		[]
	];

	//generer un chiffre random
	var tabNumero = [];
	function randomNumber() {
		var numRand = Math.floor(Math.random() * 15 + 1);
		while ( tabNumero.indexOf(numRand) >= 0 ) {
			numRand = Math.floor(Math.random() * 15 + 1);
		}
		tabNumero.push(numRand);
		return numRand;
	}

	// position depart de la case vide
	var vide = {"row": 3, "col": 3};

	// position dans le tableau de memoire
	function position(num) {

		for (var i=0;i<4;i++) {
			for (var j=0;j<4;j++) {
				if ( cases[i][j]==num) {
				   return {"row": i, "col": j};
				}
			}
		}
		
	}

	// transferer les valeurs: changement de valeur
	function changement(num,position) {

		//	position des cases
		var caseRow = position.row;
		var caseCol = position.col;
		var videRow = vide.row;
		var videCol = vide.col;
		var caseValue = document.getElementById("maTable").rows[caseRow].cells[caseCol].innerHTML;

		// transferer les valeurs
		cases[caseRow][caseCol] = 0;
		cases[vide.row][vide.col] = num;
		vide.row = caseRow;
		vide.col = caseCol;

		// affecter le nouveau html
		document.getElementById("maTable").rows[vide.row].cells[vide.col].innerHTML = '';
		document.getElementById("maTable").rows[videRow].cells[videCol].innerHTML = caseValue;
		
	}

	function deplacement(numRandom) {
		// valeur du button(this)
		var numValue = document.getElementById(`play-button-${numRandom}`).getAttribute('value');

		// emplacement de cette valeur dans le tableau en memoire
		var oCaseMemoire = position(numValue);

		// si les valeurs i,j correspondent, faire les changements de valeur
		if ( oCaseMemoire.col == vide.col) {
			if (Math.abs(oCaseMemoire.row-vide.row) == 1) {
				changement(numValue,oCaseMemoire);
			}
		} else {
			if ( oCaseMemoire.row == vide.row) {
				if (Math.abs(oCaseMemoire.col-vide.col) == 1) {
					changement(numValue,oCaseMemoire);
				}
			}
		}
	}

	function preparerTableRow() {

		var max = 0; // nb de case maximum
		var table = '<table id="maTable">';
		for (var i = 0; i < 4; i++) {
			table +='<tr>';
			for (var j = 0; j < 4; j++) {
				if (max < 15) {
					max++;
					var numRandom = randomNumber();
					table +='<td><button id="play-button-'+numRandom+'" onClick="'+deplacement(numRandom)+'" value='+numRandom+' class="uneCase">'+numRandom+'</button></td>';

					cases[i][j] = numRandom;
				} else {
					table += '<td>&nbsp;</td>';
				}
			}
			table += '</tr>';
		}
		table +='</table>';

		// affecter table creer dans le html
		document.getElementById('tableContainer').innerHTML = table;

	}

  React.useEffect(() => {
    preparerTableRow();
  }, []);

  return (
    <>
      <h1>Taquin Puzzle</h1>
		
      <div id="tableContainer"></div>
    </>
  );
};

export default Taquin;