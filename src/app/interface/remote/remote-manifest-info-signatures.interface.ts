import {RemoteManifestInfoSignaturesHeaderInterface} from './remote-manifest-info-signatures-header.interface';

export interface RemoteManifestInfoSignaturesInterface {
  header: RemoteManifestInfoSignaturesHeaderInterface;
  signature: string;
  protected: string;
}
