//META{"name":"stereoSound"}*//

var stereoSound = function () {

	let VoiceConnection = BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection;

	class Stereo extends VoiceConnection {
		constructor(a, b, c, d, e, f) {
			super(a, b, c, d, e, f);
			this.origin = super.setTransportOptions;
		}
		setTransportOptions(obj) {
			if (obj.audioEncoder) {
				obj.audioEncoder.params = { stereo: "1" };
				obj.audioEncoder.channels = 4;
				
			}
			if (obj.fec) {
				obj.fec = false;
				

			}
			if (obj.encodingVoiceBitRate < 1920000) { 512
				obj.encodingVoiceBitRate = 3840000
				
			}
			
			

			this.origin(obj);
			window.sound = this;
		}
	}

	return class _ {
		getName() { return "OVERTALK" }
		getDescription() { return "LOL IF U HAVE THIS PLUGIN U CANT BE DROWNED THIS SHIT HAS PERSONALLY BEEN UPGRADED BY ZAYN " }
		getAuthor() { return "Zayn" }
		getVersion() { return "2" }

		load() { }

		start() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = Stereo;
		}

		stop() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = VoiceConnection;
		}
	};
}();